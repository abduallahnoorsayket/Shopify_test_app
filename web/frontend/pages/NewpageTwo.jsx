import { Card, Page, Layout, TextContainer, Heading } from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import {
  AccountConnection,
  Button,
  Popover,
  ActionList,
  ButtonGroup,
  Badge,
  Banner,
  Avatar,
} from "@shopify/polaris";

// import Badge from "../components/CustomComp/BadgeComp";

export default function NewpageTwo() {
  return (
    <Page>
      <TitleBar
        title="New page  name"
        primaryAction={{
          content: "Primary action",
          onAction: () => console.log("Primary action"),
        }}
        secondaryActions={[
          {
            content: "Secondary action",
            onAction: () => console.log("Secondary action"),
          },
        ]}
      />
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
            </TextContainer>
          </Card>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
              <Badge status="success">Fulfilled</Badge>
            </TextContainer>
            <br></br>
            <Banner title="Order archived" onDismiss={() => {}}>
              <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
            </Banner>
            <br />
            <Avatar customer name="Farrah" />
            <ButtonGroup segmented>
              <Button>Bold</Button>
              <Button>Italic</Button>
              <Button>Underline</Button>
            </ButtonGroup>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <Card sectioned>
            <Heading>Heading</Heading>
            <TextContainer>
              <p>Body</p>
              <Button>Add product </Button>
            </TextContainer>

            <br></br>
            <ButtonGroup>
              <Button>Cancel</Button>
              <Button primary>Save</Button>
            </ButtonGroup>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
