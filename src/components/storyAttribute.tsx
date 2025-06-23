import React from 'react'
import styles from "../style.module.scss";

interface StoryAttributeProps {
  AtrributeKey: string;
  AtrributeValue: string | number;
}

const StoryAttribute = ({
  AtrributeKey,
  AtrributeValue,
}: StoryAttributeProps) => {
  return (
    <div className={styles.attributeRow}>
      <span className={styles.attributeKey}>{AtrributeKey}</span>
      <span className={styles.attributeValue}>{AtrributeValue}</span>
    </div>
  );
};

export default StoryAttribute