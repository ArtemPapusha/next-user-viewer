"use client"
import Link from "next/link"

import { Flex, Typography } from "antd"

import styles from "./styles.module.css"

export default function Home() {
  const { Title } = Typography

  return (
    <main style={{ height: "100%" }}>
      <section style={{ height: "100%" }}>
        <Flex
          vertical
          justify="center"
          align="center"
          style={{ height: "100%" }}
        >
          <Title className={styles.homeTitle}>Welcome to the test task!</Title>

          <Link className={styles.homeLink} href={`/users/`}>
            Go to cards
          </Link>
        </Flex>
      </section>
    </main>
  )
}
