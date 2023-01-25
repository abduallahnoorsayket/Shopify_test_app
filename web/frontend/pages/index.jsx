import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  Button,
  Modal,
  OptionList,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";
import { trophyImage } from "../assets";
import { ProductsCard } from "../components";
import { useState, useCallback } from "react";

export default function HomePage() {
  const [active, setActive] = useState(true);
  const [selected, setSelected] = useState([]);
  const handleChange = useCallback(() => setActive(!active), [active]);

  const activator = <Button onClick={handleChange}> Open Modal</Button>;
  return (
    <Page narrowWidth>
      <TitleBar title="Test App Abdullah" primaryAction={null} />
      <Layout>
        {/* <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>
                    Nice work "Abdullah sayket" on building a Shopify app 🎉
                  </Heading>
                  <p>
                    Your app is ready to explore! It contains everything you
                    need to get started including the{" "}
                    <Link url="https://polaris.shopify.com/" external>
                      Polaris design system
                    </Link>
                    ,{" "}
                    <Link url="https://shopify.dev/api/admin-graphql" external>
                      Shopify Admin API
                    </Link>
                    , and{" "}
                    <Link
                      url="https://shopify.dev/apps/tools/app-bridge"
                      external
                    >
                      App Bridge
                    </Link>{" "}
                    UI library and components.
                  </p>
                  <p>
                    Ready to go? Start populating your app with some sample
                    products to view and test in your store.{" "}
                  </p>
                  <p>
                    Learn more about building out your app in{" "}
                    <Link
                      url="https://shopify.dev/apps/getting-started/add-functionality"
                      external
                    >
                      this Shopify tutorial
                    </Link>{" "}
                    📚{" "}
                  </p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImage}
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section> */}
        <Layout.Section>
          <ProductsCard />
          <div style={{ height: "500px" }}>
            <Modal
              activator={activator}
              open={active}
              onClose={handleChange}
              title="Reach more shoppers with Instagram product tags"
              primaryAction={{
                content: "Add Instagram",
                onAction: handleChange,
              }}
              secondaryActions={[
                {
                  content: "Learn more",
                  onAction: handleChange,
                },
              ]}
            >
              <Modal.Section>
                <TextContainer>
                  <p>
                    Use Instagram posts to share your products with millions of
                    people. Let shoppers buy from your store without leaving
                    Instagram.
                  </p>
                </TextContainer>
              </Modal.Section>
            </Modal>
            <br>
            </br>
          </div>
        </Layout.Section>
      </Layout>
    </Page>
    // new page
    
  );
}
