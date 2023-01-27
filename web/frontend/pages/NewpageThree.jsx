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
  // Text,
} from "@shopify/polaris";
import React from "react";
import { useState, useCallback } from "react";

export default function NewpageThree() {
  // select
  const [selected, setSelected] = useState("today");

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last 7 days", value: "lastWeek" },
  ];
  // tog
  // const [active, setActive] = useState(false);

  // const handleToggle = useCallback(() => setActive((active) => !active), []);

  // const contentStatus = active ? "Deactivate" : "Activate";
  // const textStatus = active ? "activated" : "deactivated";

  // Toast
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast content="Message sent" onDismiss={toggleActive} />
  ) : null;

  return (
    <>
      <Page>
        <Card title="Terms of service" sectioned>
          <Scrollable shadow style={{ height: "100px" }} focusable>
            <p>
              By signing up for the Shopify service (“Service”) or any of the
              services of Shopify Inc. (“Shopify”) you are agreeing to be bound
              by the following terms and conditions (“Terms of Service”). The
              Services offered by Shopify under the Terms of Service include
              various products and services to help you create and manage a
              retail store, whether an online store (“Online Services”), a
              physical retail store (“POS Services”), or both. Any new features
              or tools which are added to the current Service shall be also
              subject to the Terms of Service. You can review the current
              version of the Terms of Service at any time at
              https://www.shopify.com/legal/terms. Shopify reserves the right to
              update and change the Terms of Service by posting updates and
              changes to the Shopify website. You are advised to check the Terms
              of Service from time to time for any updates or changes that may
              impact you. By signing up for the Shopify service (“Service”) or
              any of the services of Shopify Inc. (“Shopify”) you are agreeing
              to be bound by the following terms and conditions (“Terms of
              Service”). The Services offered by Shopify under the Terms of
              Service include various products and services to help you create
              and manage a
            </p>
          </Scrollable>
        </Card>
        <br></br>
        <div className="row">
          <div className="col-md-6">
            <Select
              label="Date range"
              options={options}
              onChange={handleSelectChange}
              value={selected}
            />
          </div>
          <br></br>
          <Card>
            {/* <SettingToggle
              action={{
                content: contentStatus,
                onAction: handleToggle,
              }}
              enabled={active}
            >
              This setting is{" "}
              <span variant="bodyMd" fontWeight="bold" as="span">
                {textStatus}
              </span>
              .
              <Thumbnail
                source="https://burst.shopifycdn.com/photos/black-leather-choker-necklace_373x@2x.jpg"
                alt="Black choker necklace"
              />
            </SettingToggle> */}
          </Card>
          <Tooltip active content="This order has shipping labels.">
            <TextField variant="bodyMd" fontWeight="bold" as="span">
              Order #1001
            </TextField>
          </Tooltip>
          <br></br>
          <Card>
            <Frame style={{ height: "150px" }}>
              <Page title="Toast example">
                <Button onClick={toggleActive}>Show Toast</Button>
                {toastMarkup}
              </Page>
            </Frame>
          </Card>
        </div>
      </Page>
    </>
  );
}
