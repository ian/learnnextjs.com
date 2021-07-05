import React from "react"
import { Box, Flex, Stack, space, BoxProps } from "@stacks/ui"
import { H1 } from "@components/mdx"
import { Text } from "@components/typography"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import { getTitle } from "@common/utils"
import { css } from "@stacks/ui-core"
import { getHeadingStyles } from "@components/mdx/typography"
import { PageMeta } from "@components/page-meta"

interface PageTopProps extends BoxProps {
  description?: string
  duration?: string
  experience?: "beginners" | "intermediate" | "advanced"
  title?: string
  headings?: any[]
}
export const PageTop: React.FC<PageTopProps> = React.memo(
  ({ description, experience, duration, title, headings, ...rest }) => {
    const router = useRouter()
    const isHome = router?.pathname === "/"
    return (
      <Box as="section" mb="64px" {...rest}>
        <Flex>
          <H1 mb="0 !important">
            {getTitle({
              title,
              headings
            })}
          </H1>
        </Flex>
        {description ? (
          <Box mt="40px !important">
            <Text {...getHeadingStyles("h4")}>{description}</Text>
          </Box>
        ) : null}
        <PageMeta duration={duration} experience={experience} isHome={isHome} />
      </Box>
    )
  }
)
