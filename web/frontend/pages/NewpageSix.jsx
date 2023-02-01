import {
  Page,
  EmptyState,
  Card,
  ExceptionList,
  FooterHelp,
  Link,
  Tabs,
  CalloutCard,
  useIndexResourceState,
  IndexTable,
  TextContainer,
  // Text,
} from "@shopify/polaris";
import React from "react";
import { CirclePlusMinor, NoteMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

export default function NewpageThree() {
  // const [files, setFiles] = useState([]);

  // const handleDropZoneDrop = useCallback(
  //   (_dropFiles, acceptedFiles, _rejectedFiles) =>
  //     setFiles((files) => [...files, ...acceptedFiles]),
  //   []
  // );

  // const validImageTypes = ["image/gif", "image/jpeg", "image/png"];

  // const fileUpload = !files.length && <DropZone.FileUpload />;
  // const uploadedFiles = files.length > 0 && (
  //   <div style={{ padding: "0" }}>
  //     <Stack vertical>
  //       {files.map((file, index) => (
  //         <Stack alignment="center" key={index}>
  //           {/* <Thumbnail
  //             size="small"
  //             alt={file.name}
  //             source={
  //               validImageTypes.includes(file.type)
  //                 ? window.URL.createObjectURL(file)
  //                 : null
  //             }
  //           /> */}
  //           <div>
  //             {file.name}{" "}
  //             {/* <Text variant="bodySm" as="p">
  //               {file.size} bytes
  //             </Text> */}
  //           </div>
  //         </Stack>
  //       ))}
  //     </Stack>
  //   </div>
  // );
  // tabs
  const [selected, setSelected] = useState(0);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  );

  const tabs = [
    {
      id: "all-customers-1",
      content: "All",
      accessibilityLabel: "All customers",
      panelID: "all-customers-content-1",
    },
    {
      id: "accepts-marketing-1",
      content: "Accepts marketing",
      panelID: "accepts-marketing-content-1",
    },
    {
      id: "repeat-customers-1",
      content: "Repeat customers",
      panelID: "repeat-customers-content-1",
    },
    {
      id: "prospects-1",
      content: "Prospects",
      panelID: "prospects-content-1",
    },
  ];
  // Index table
  const customers = [
    {
      id: "3411",
      url: "customers/341",
      name: "Mae Jemison",
      location: "Decatur, USA",
      orders: 20,
      amountSpent: "$2,400",
    },
    {
      id: "2561",
      url: "customers/256",
      name: "Ellen Ochoa",
      location: "Los Angeles, USA",
      orders: 30,
      amountSpent: "$140",
    },
  ];
  const resourceName = {
    singular: "customer",
    plural: "customers",
  };

  const { selectedResources, allResourcesSelected, handleSelectionChange } =
    useIndexResourceState(customers);

  const rowMarkup = customers.map(
    ({ id, name, location, orders, amountSpent }, index) => (
      <IndexTable.Row
        id={id}
        key={id}
        selected={selectedResources.includes(id)}
        position={index}
      >
        <IndexTable.Cell>
          <TextContainer variant="bodyMd" fontWeight="bold" as="span">
            {name}
          </TextContainer>
        </IndexTable.Cell>
        <IndexTable.Cell>{location}</IndexTable.Cell>
        <IndexTable.Cell>{orders}</IndexTable.Cell>
        <IndexTable.Cell>{amountSpent}</IndexTable.Cell>
      </IndexTable.Row>
    )
  );
  return (
    <>
      <Page>
        {/* <DropZone onDrop={handleDropZoneDrop}>
          {uploadedFiles}
          {fileUpload}
        </DropZone> */}
        <br></br>
        <CalloutCard
          title="Customize the style of your checkout"
          illustration="https://cdn.shopify.com/s/assets/admin/checkout/settings-customizecart-705f57c725ac05be5a34ec20c05b94298cb8afd10aac7bd9c7ad02030f48cfa0.svg"
          primaryAction={{
            content: "Customize checkout",
            url: "https://www.shopify.com",
          }}
        >
          <p>Upload your store’s logo, change colors and fonts, and more.</p>
        </CalloutCard>
        <br></br>
        <Card>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
            <Card.Section title={tabs[selected].content}>
              <p>
                Tab {selected} selected. Lorem Ipsum is simply dummy text of the
                printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a
                type specimen book. It has survived not only five centuries
              </p>
            </Card.Section>
          </Tabs>
        </Card>
        <br></br>
        <Card>
          <IndexTable
            resourceName={resourceName}
            itemCount={customers.length}
            selectedItemsCount={
              allResourcesSelected ? "All" : selectedResources.length
            }
            onSelectionChange={handleSelectionChange}
            headings={[
              { title: "Name" },
              { title: "Location" },
              { title: "Order count" },
              { title: "Amount spent" },
            ]}
          >
            {rowMarkup}
          </IndexTable>
        </Card>
        <br></br>
        <Card sectioned>
          <EmptyState
            heading="Upload a file to get started"
            action={{ content: "Upload files" }}
            image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            fullWidth
          >
            <p>
              You can use the Files section to upload images, videos, and other
              documents. This example shows the content with a centered layout
              and full width.
            </p>
          </EmptyState>
        </Card>
        <ExceptionList
          items={[
            {
              icon: NoteMinor,
              description:
                "This customer is awesome. Make sure to treat them right!",
            },
          ]}
        />
        <FooterHelp>
          Learn more about{" "}
          <Link url="https://help.shopify.com/manual/orders/fulfill-orders">
            fulfilling orders
          </Link>
        </FooterHelp>
      </Page>
    </>
  );
}
