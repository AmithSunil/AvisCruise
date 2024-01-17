import styles from "./Adults.module.css";
import { useState } from "react";
import { useEffect } from "react";
import {InputNumber} from 'antd';

const Adults = () => {
  return <div className={styles.main}>
    Adults
    <InputNumber min={1} max={10} defaultValue={3}  className={styles.bod}/>
    <InputNumber min={1} max={10} defaultValue={3}  className={styles.bod}/>

    </div>
};

export default Adults;
