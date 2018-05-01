import { Card, Icon } from "semantic-ui-react";
import { Link } from "../routes.js";

const divContentStyle = { color: "#0c8346" };
const cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

export default function displayUserEvents(arr) {
  if (arr.filter(e => e.ticketsOwned !== "0").length > 0) {
    return arr
      .sort(function(a, b) {
        return Date.parse(a[3]) > Date.parse(b[3])
          ? 1
          : Date.parse(b[3]) > Date.parse(a[3]) ? -1 : 0;
      })
      .filter(event => event.ticketsOwned !== "0")
      .map((event, i) => (
        <Link route={`/events/${event.address}`}>
          <Card key={i} fluid style={{ marginBottom: "50px" }}>
            <Card.Content header={event[6]} />
            <Card.Description
              style={{
                marginLeft: "20px",
                marginBottom: "15px",
                color: "#0c8346",
                fontWeight: "600"
              }}
            >
              You have {event.ticketsOwned}{" "}
              {event.ticketsOwned > 1 ? "tickets" : "ticket"}
            </Card.Description>
            <Card.Content extra style={{ display: "flex" }}>
              <div style={divContentStyle}>
                <Icon style={cardIconStyle} name="calendar" />
                {event[3]}
              </div>
              <div style={divContentStyle}>
                <Icon style={cardIconStyle} name="map pin" />
                {event[5]}
              </div>
              <div style={divContentStyle}>
                <Icon style={cardIconStyle} name="users" />
                {`${event[8]} people are attending`}
              </div>
            </Card.Content>
          </Card>
        </Link>
      ));
  } else {
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#E5E3E3",
          padding: "10px",
          marginLeft: "150px",
          marginRight: "150px",
          borderRadius: "15px",
          color: "#7F7777"
        }}
      >
        <Icon
          name="warning circle"
          style={{ color: "#0c8346", fontSize: "40px" }}
          size="huge"
        />
        <h3 style={{ color: "#0c8346", fontSize: "30px" }}>Uh oh!</h3>
        <p style={{ fontSize: "17px", fontWeight: "700" }}>
          Looks like you haven't purchased any tickets yet!
        </p>
        <Link route="/events">
          <a
            style={{
              fontWeight: "700",
              fontSize: "17px",
              color: "#0c8346",
              fontStyle: "italic"
            }}
          >
            Click here to view upcoming events
          </a>
        </Link>
      </div>
    );
  }
}
