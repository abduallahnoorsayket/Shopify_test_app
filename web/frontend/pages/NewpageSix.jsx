import {
  Page,
  EmptyState,
  Card,
  ExceptionList,
  FooterHelp,
  Link,
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

  return (
    <>
      <Page>
        {/* <DropZone onDrop={handleDropZoneDrop}>
          {uploadedFiles}
          {fileUpload}
        </DropZone> */}
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
