import { Button, Radio, Select } from "antd";
import styles from "./learnPage.module.scss";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Carto } from "../../components";
import {
  projectionProperties,
  projectionTypes,
} from "./components/proj.constants";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import {
  PROJECTIONS,
  TProjProperty,
  TProjType,
} from "../../components/map/map-constants";
import {
  projectionDescriptions,
  projectionPropertyDescriptions,
} from "./learnPage.constants";

interface Projection {
  proj: string;
  name: string;
  type: TProjType;
  property: TProjProperty;
}
interface ProjectionList {
  prevProj: Projection | null;
  nextProj: Projection | null;
}

export const LearnPage = () => {
  const [learnMode, setLearnMode] = useState("type");
  const [selectedProperty, setSelectedProperty] =
    useState<TProjProperty>("Equal-area");
  const [selectedType, setSelectedType] = useState<TProjType>("Azimuthal");
  const [currentProjection, setCurrentProjection] = useState<Projection>({
    proj: "bonne",
    name: "Bonne",
    type: "Pseudoconical",
    property: "Equal-area",
  });

  const filterByType = (type: TProjType) => {
    return Object.keys(PROJECTIONS)
      .filter((key) => PROJECTIONS[key].type === type)
      .map((key) => ({
        proj: key,
        name: PROJECTIONS[key].name,
        type: PROJECTIONS[key].type,
        property: PROJECTIONS[key].property,
      }));
  };

  const filterByProperty = (property: TProjProperty) => {
    return Object.keys(PROJECTIONS)
      .filter((key) => PROJECTIONS[key].property === property)
      .map((key) => ({
        proj: key,
        name: PROJECTIONS[key].name,
        type: PROJECTIONS[key].type,
        property: PROJECTIONS[key].property,
      }));
  };

  const ProjectionsByProperty: Projection[] = useMemo(() => {
    return filterByProperty(selectedProperty);
  }, [selectedProperty]);

  const ProjectionsByType: Projection[] = useMemo(() => {
    return filterByType(selectedType);
  }, [selectedType]);

  useEffect(() => {
    const selectProjection =
      learnMode === "type" ? ProjectionsByType[0] : ProjectionsByProperty[0];

    setCurrentProjection(selectProjection);
  }, [ProjectionsByProperty, ProjectionsByType, learnMode]);

  const getPrevAndNextProjections = (
    projections: Projection[],
    currentProj: Projection
  ): ProjectionList => {
    const currentIndex = projections.findIndex(
      (proj) => proj.proj === currentProj.proj
    );

    if (currentIndex === -1) {
      return { prevProj: null, nextProj: null };
    }

    const prevProj = currentIndex > 0 ? projections[currentIndex - 1] : null;
    const nextProj =
      currentIndex < projections.length - 1
        ? projections[currentIndex + 1]
        : null;

    return { prevProj, nextProj };
  };

  const currentProjectionList = useMemo(() => {
    return learnMode === "type" ? ProjectionsByType : ProjectionsByProperty;
  }, [learnMode, ProjectionsByType, ProjectionsByProperty]);

  const onLeftClick = useCallback(() => {
    const { prevProj }: ProjectionList = getPrevAndNextProjections(
      currentProjectionList,
      currentProjection
    );

    if (prevProj !== null) {
      setCurrentProjection(prevProj);
    }
  }, [currentProjectionList, currentProjection]);

  const onRightClick = useCallback(() => {
    const { nextProj }: ProjectionList = getPrevAndNextProjections(
      currentProjectionList,
      currentProjection
    );

    if (nextProj !== null) {
      setCurrentProjection(nextProj);
    }
  }, [currentProjectionList, currentProjection]);

  const rightDisabled = useMemo(() => {
    const index = currentProjectionList.findIndex(
      (option) => option.proj === currentProjection.proj
    );

    if (index == -1 || index == currentProjectionList.length - 1) {
      return true;
    }
  }, [currentProjection, currentProjectionList]);

  const leftDisabled = useMemo(() => {
    const index = currentProjectionList.findIndex(
      (option) => option.proj === currentProjection.proj
    );

    if (index == 0) {
      return true;
    }
  }, [currentProjection.proj, currentProjectionList]);

  const description = useMemo(() => {
    if (learnMode === "type") {
      return projectionDescriptions[selectedType];
    } else {
      return projectionPropertyDescriptions[selectedProperty];
    }
  }, [learnMode, selectedProperty, selectedType]);

  return (
    <div className={styles.page}>
      <Radio.Group
        value={learnMode}
        buttonStyle="solid"
        onChange={(e) => setLearnMode(e.target.value)}
        className={styles.radioGroup}
      >
        <Radio.Button value="type">Types</Radio.Button>
        <Radio.Button value="property">Properties</Radio.Button>
      </Radio.Group>

      <div className={styles.content}>
        <div className={styles.info}>
          {learnMode === "type" && (
            <Select
              value={selectedType}
              placeholder="Select a projection type"
              style={{ width: 200 }}
              onChange={(value) => setSelectedType(value)}
            >
              {projectionTypes.map((type) => (
                <Select.Option key={type} value={type}>
                  {type}
                </Select.Option>
              ))}
            </Select>
          )}

          {learnMode === "property" && (
            <Select
              value={selectedProperty}
              placeholder="Select a projection property"
              style={{ width: 200 }}
              onChange={(value) => setSelectedProperty(value)} // Replace with appropriate handler
            >
              {projectionProperties.map((property) => (
                <Select.Option key={property} value={property}>
                  {property}
                </Select.Option>
              ))}
            </Select>
          )}

          <div>{description}</div>
        </div>

        <div className={styles.map}>
          <span className={styles.name}>{currentProjection.name}</span>
          <Carto currentProjection={currentProjection.proj} />
          <div className={styles.infoBlock}>
            <div className={styles.block}>
              <div className={styles.blockHeader}>
                <span className={styles.category}>Type</span>
                <span className={styles.categoryName}>
                  {currentProjection?.type}
                </span>
              </div>
            </div>
            <div className={styles.block}>
              <div className={styles.blockHeader}>
                <span className={styles.category}>Property</span>
                <span className={styles.categoryName}>
                  {currentProjection?.property}
                </span>
              </div>
            </div>
          </div>
          <div className={styles.arrows}>
            <Button
              type="link"
              icon={<LeftCircleOutlined />}
              onClick={onLeftClick}
              disabled={leftDisabled}
            ></Button>
            <Button
              type="link"
              icon={<RightCircleOutlined />}
              onClick={onRightClick}
              disabled={rightDisabled}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
