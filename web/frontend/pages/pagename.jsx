import {
  Card,
  Page,
  Layout,
  TextContainer,
  Heading,
  AccountConnection,
  Button,
  Popover,
  ActionList,
  ButtonGroup,
  Badge,
  Banner,
  Avatar,
  Link,
  List,
  Listbox,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

// import Badge from "../components/CustomComp/BadgeComp";

export default function PageName() {
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
              <span>
                {" "}
                <Link url="https://help.shopify.com/manual" className="ml-4">
                  fulfilling orders
                </Link>
                ;
              </span>
            </TextContainer>
            <br></br>
            <Banner title="Order archived" onDismiss={() => {}}>
              <p>This order was archived on March 7, 2017 at 3:12pm EDT.</p>
            </Banner>
            <Banner>
              Learn more about{" "}
              <Link url="https://help.shopify.com/manual">
                fulfilling orders
              </Link>
            </Banner>
            <br />
            <Avatar customer name="Farrah" />
            <ButtonGroup segmented>
              <Button>Bold</Button>
              <Button>Italic</Button>
              <Button>Underline</Button>
            </ButtonGroup>
            <br></br>
            <span>
              <List spacing="extraTight">
                <List.Item>Yellow shirt</List.Item>
                <List.Item>Red shirt</List.Item>
                <List.Item>Green shirt</List.Item>
              </List>
            </span>
            <br></br>
            <Listbox>
              <Listbox.Option value="UniqueValue-1">Item 1</Listbox.Option>
              <Listbox.Option value="UniqueValue-2">Item 2</Listbox.Option>
              <Listbox.Option value="UniqueValue-3">Item 3</Listbox.Option>
              <Listbox.Loading accessibilityLabel="Loading" />
            </Listbox>
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
          <Card title="Online store dashboard" sectioned>
            <p>View a summary of your online store’s performance.</p>
          </Card>
        </Layout.Section>
      </Layout>
      <br></br>
      <Layout>
        <Layout.Section>
          <Card title="Online store dashboard" sectioned>
            <p>View a summary of your online store’s performance.</p>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
