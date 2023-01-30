import {
  Page,
  Badge,
  Card,
  PageActions,
  Pagination,
  Button,
  Popover,
  ActionList,
  Stack,
  RadioButton,
  RangeSlider,
  TextField,
  Scrollable,
  Select,
  SettingToggle,
  Thumbnail,
  Toast,
  Frame,
  Tooltip,
  Form,
  FormLayout,
  Checkbox,
  ButtonGroup,
  FullscreenBar,
  Grid,
  Icon,
  ChoiceList,
  Collapsible,
  TextContainer,
  Link,
  ColorPicker,
  DescriptionList,
  DataTable,
  DatePicker,
  ResourceList,
  Avatar,
  ResourceItem,
  // Text,
} from "@shopify/polaris";
import React from "react";
import { CirclePlusMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

export default function NewpageThree() {
  // choiceList
  const [selected, setSelected] = useState(["hidden"]);

  const handleChange = useCallback((value) => setSelected(value), []);

  // collapsible
  const [open, setOpen] = useState(true);

  const handleToggle = useCallback(() => setOpen((open) => !open), []);
  // color picker
  const [color, setColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1,
  });
  // data table
  const rows = [
    ["Emerald Silk Gown", "$875.00", 124689, 140, "$122,500.00"],
    ["Mauve Cashmere Scarf", "$230.00", 124533, 83, "$19,090.00"],
    [
      "Navy Merino Wool Blazer with khaki chinos and yellow belt",
      "$445.00",
      124518,
      32,
      "$14,240.00",
    ],
  ];
  // date picker
  const [{ month, year }, setDate] = useState({ month: 1, year: 2018 });
  const [selectedDates, setSelectedDates] = useState({
    start: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
    end: new Date("Wed Feb 07 2018 00:00:00 GMT-0500 (EST)"),
  });

  const handleMonthChange = useCallback(
    (month, year) => setDate({ month, year }),
    []
  );

  return (
    <>
      <Page>
        <ChoiceList
          title="Company name"
          choices={[
            { label: "Hidden", value: "hidden" },
            { label: "Optional", value: "optional" },
            { label: "Required", value: "required" },
          ]}
          selected={selected}
          onChange={handleChange}
        />
        <br></br>
        <div style={{ height: "200px" }}>
          <Card sectioned>
            <Stack vertial>
              <Button
                onClick={handleToggle}
                ariaExpanded={open}
                ariaControls="basic-collapsible"
              >
                Toggle
              </Button>
              <Collapsible
                open={open}
                id="basic-collapsible"
                transition={{
                  duration: "500ms",
                  timingFunction: "ease-in-out",
                }}
                expandOnPrint
              >
                <TextContainer>
                  <p>
                    Your mailing list lets you contact customers or visitors who
                    have shown an interest in your store. Reach out to them with
                    exclusive offers or updates about your products. Your
                    mailing list lets you contact customers or visitors who have
                    shown an interest in your store. Reach out to them with
                    exclusive offers or updates about your products.
                  </p>
                  <p>
                    Your mailing list lets you contact customers or visitors who
                    have shown an interest in your store. Reach out to them with
                    exclusive offers or updates about your products. Your
                    mailing list lets you contact customers or visitors who have
                    shown an interest in your store. Reach out to them with
                    exclusive offers or updates about your products.
                  </p>
                </TextContainer>
                <br></br>
                <ColorPicker onChange={setColor} color={color} />
                <DatePicker
                  month={month}
                  year={year}
                  onChange={setSelectedDates}
                  onMonthChange={handleMonthChange}
                  selected={selectedDates}
                />
              </Collapsible>
            </Stack>
          </Card>
          <br></br>
          <Card>
            <DataTable
              columnContentTypes={[
                "text",
                "numeric",
                "numeric",
                "numeric",
                "numeric",
              ]}
              headings={[
                "Product",
                "Price",
                "SKU Number",
                "Net quantity",
                "Net sales",
              ]}
              rows={rows}
              totals={["", "", "", 255, "$155,830.00"]}
              showTotalsInFooter
            />
          </Card>
          <br></br>
          <Card>
            <ResourceList
              resourceName={{ singular: "customer", plural: "customers" }}
              items={[
                {
                  id: 100,
                  url: "customers/341",
                  name: "Mae Jemison",
                  location: "Decatur, USA",
                },
                {
                  id: 200,
                  url: "customers/256",
                  name: "Ellen Ochoa",
                  location: "Los Angeles, USA",
                },
              ]}
              renderItem={(item) => {
                const { id, url, name, location } = item;
                const media = <Avatar customer size="medium" name={name} />;

                return (
                  <ResourceItem
                    id={id}
                    url={url}
                    media={media}
                    accessibilityLabel={`View details for ${name}`}
                  >
                    <TextContainer variant="bodyMd" fontWeight="bold" as="h3">
                      {name}
                    </TextContainer>
                    <div>{location}</div>
                  </ResourceItem>
                );
              }}
            />
          </Card>
          <br></br>
          <DescriptionList
            items={[
              {
                term: "Logistics",
                description:
                  "The management of products or other resources as they travel between a point of origin and a destination.",
              },
              {
                term: "Sole proprietorship",
                description:
                  "A business structure where a single individual both owns and runs the company.",
              },
              {
                term: "Discount code",
                description:
                  "A series of numbers and/or letters that an online shopper may enter at checkout to get a discount or special offer.",
              },
            ]}
          />
          <br></br>
        </div>
        <br></br>
      </Page>
    </>
  );
}
