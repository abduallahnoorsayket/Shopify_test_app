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
} from "@shopify/polaris";
import React from "react";
import { useState, useCallback } from "react";

export default function PageExample() {
  // pop over
  const [popoverActive, setPopoverActive] = useState(true);

  const togglePopoverActive = useCallback(
    () => setPopoverActive((popoverActive) => !popoverActive),
    []
  );

  const activator = (
    <Button onClick={togglePopoverActive} disclosure>
      More actions
    </Button>
  );
  // radio
  const [value, setValue] = useState("disabled");

  const handleChange = useCallback(
    (_checked, newValue) => setValue(newValue),
    []
  );
  // range Slider
  const [rangeValue, setRangeValue] = useState(52);

  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    []
  );
  // input text
  const [textvalue, setTextValue] = useState(1);

  const handleTextChange = useCallback(
    (newValue) => setTextValue(newValue),
    []
  );

  return (
    <>
      <Page
        breadcrumbs={[{ content: "Products", url: "/pagename" }]}
        title="3/4 inch Leather pet collar"
        titleMetadata={<Badge status="success">Paid</Badge>}
        subtitle="Perfect for any pet"
        compactTitle
        primaryAction={{ content: "Save", disabled: false }}
        secondaryActions={[
          {
            content: "Duplicate",
            accessibilityLabel: "Secondary action label",
            onAction: () => alert("Duplicate action"),
          },
          {
            content: "View on your store",
            onAction: () => alert("View on your store action"),
          },
        ]}
        actionGroups={[
          {
            title: "Promote",
            accessibilityLabel: "Action group label",
            actions: [
              {
                content: "Share on Facebook",
                accessibilityLabel: "Individual action label",
                onAction: () => alert("Share on Facebook action"),
              },
            ],
          },
        ]}
        pagination={{
          hasPrevious: true,
          hasNext: true,
        }}
      >
        <Card title="Credit card" sectioned>
          <p>Credit card information</p>
        </Card>
        <PageActions
          primaryAction={{
            content: "Save",
          }}
          secondaryActions={[
            {
              content: "Delete",
              destructive: true,
            },
          ]}
        />
        <Popover
          active={popoverActive}
          activator={activator}
          autofocusTarget="first-node"
          onClose={togglePopoverActive}
        >
          <ActionList
            actionRole="menuitem"
            items={[
              { content: "Import" },
              { content: "Export" },
              { content: "NoPort" },
            ]}
          />
        </Popover>
        <br></br>
        <br></br>
        <Stack vertical>
          <RadioButton
            label="Accounts are disabled"
            helpText="Customers will only be able to check out as guests."
            checked={value === "disabled"}
            id="disabled"
            name="accounts"
            onChange={handleChange}
          />
          <RadioButton
            label="Accounts are optional"
            helpText="Customers will be able to check out with a customer account or as a guest."
            id="optional"
            name="accounts"
            checked={value === "optional"}
            onChange={handleChange}
          />
        </Stack>
        <br></br>
        <br></br>
        <br></br>
        <Card sectioned title="Background color">
          <RangeSlider
            label="Opacity percentage"
            value={rangeValue}
            onChange={handleRangeSliderChange}
            output
          />
          <br></br>

          <TextField
            label="Store name"
            value={textvalue}
            type="number"
            onChange={handleTextChange}
            autoComplete="off"
          />
        </Card>
        <br></br>
        <br></br>

        <Pagination
          hasPrevious
          onPrevious={() => {
            console.log("Previous");
          }}
          hasNext
          onNext={() => {
            console.log("Next");
          }}
        />
      </Page>
    </>
  );
}
