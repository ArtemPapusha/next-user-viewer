import type React from "react"
import styles from "./styles.module.css"
import { Spin } from "antd"

const Loading: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <Spin size="large" />
    </div>
  )
}

export default Loading
