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
  // Text,
} from "@shopify/polaris";
import React from "react";
import { CirclePlusMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";

export default function NewpageThree() {
  const [newsletter, setNewsletter] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = useCallback((_event) => {
    setEmail("");
    setNewsletter(false);
  }, []);

  const handleNewsLetterChange = useCallback(
    (value) => setNewsletter(value),
    []
  );

  const handleEmailChange = useCallback((value) => setEmail(value), []);

  // Fullscreen bar
  const [isFullscreen, setFullscreen] = useState(true);

  const handleActionClick = useCallback(() => {
    setFullscreen(false);
  }, []);

  const fullscreenBarMarkup = (
    <FullscreenBar onAction={handleActionClick}>
      <div
        style={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        <Badge status="info">Draft</Badge>
        <div style={{ marginLeft: "1rem", flexGrow: 1 }}>
          <TextField variant="headingLg" as="p">
            Page title
          </TextField>
        </div>
        <ButtonGroup>
          <Button onClick={() => {}}>Secondary Action</Button>
          <Button primary onClick={() => {}}>
            Primary Action
          </Button>
        </ButtonGroup>
      </div>
    </FullscreenBar>
  );
  return (
    <>
      <div style={{ height: "150px", width: "100%" }}>
        {isFullscreen && fullscreenBarMarkup}
        <div style={{ padding: "1rem" }}>
          {!isFullscreen && (
            <Button onClick={() => setFullscreen(true)}>Go Fullscreen</Button>
          )}
          <TextField variant="headingLg" as="p">
            Page content
          </TextField>
        </div>
      </div>
      <Page>
        <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 3 }}>
            <Card title="Sales" sectioned>
              <Icon source={CirclePlusMinor} color="warning" />;
              <p>View a summary of your online store’s sales.</p>
            </Card>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 3 }}>
            <Card title="Orders" sectioned>
              <p>View a summary of your online store’s orders.</p>
            </Card>
          </Grid.Cell>{" "}
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 3 }}>
            <Card title="Sales" sectioned>
              <p>View a summary of your online store’s sales.</p>
            </Card>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 6, xl: 3 }}>
            <Card title="Sales" sectioned>
              <p>View a summary of your online store’s sales.</p>
            </Card>
          </Grid.Cell>
        </Grid>
        <br></br>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <Checkbox
              label="Sign up for the Polaris newsletter"
              checked={newsletter}
              onChange={handleNewsLetterChange}
            />

            <TextField
              value={email}
              onChange={handleEmailChange}
              label="Email"
              type="email"
              autoComplete="email"
              helpText={
                <span>
                  We’ll use this email address to inform you on future changes
                  to Polaris.
                </span>
              }
            />

            <Button submit>Submit</Button>
          </FormLayout>
        </Form>
        <br></br>
        <FormLayout>
          <TextField
            label="Store name"
            onChange={() => {}}
            autoComplete="off"
          />
          <TextField
            type="email"
            label="Account email"
            onChange={() => {}}
            autoComplete="email"
          />
        </FormLayout>
        <br></br>
        <FormLayout>
          <FormLayout.Group>
            <TextField
              type="number"
              label="Minimum order"
              onChange={() => {}}
              autoComplete="off"
            />
            <TextField
              type="number"
              label="Maximum order"
              onChange={() => {}}
              autoComplete="off"
            />
          </FormLayout.Group>
        </FormLayout>
        <br></br>
        <FormLayout>
          <FormLayout.Group condensed>
            <TextField label="Length" onChange={() => {}} autoComplete="off" />
            <TextField label="Width" onChange={() => {}} autoComplete="off" />
            <TextField label="Height" onChange={() => {}} autoComplete="off" />
            <TextField label="Unit" onChange={() => {}} autoComplete="off" />
          </FormLayout.Group>
        </FormLayout>
        <br></br>
      </Page>
    </>
  );
}
