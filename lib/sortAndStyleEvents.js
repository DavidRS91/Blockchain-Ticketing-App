import { Card, Icon } from "semantic-ui-react";
import { Link } from "../routes.js";

const divContentStyle = { color: "#0c8346" };
const cardIconStyle = { marginLeft: "15px", color: "#0c8346" };

export default function sortAndStyleEvents(arr) {
  const rightNow = new Date();
  return arr
    .filter(e => Date.parse(e[3]) >= rightNow)
    .sort(function(a, b) {
      return Date.parse(a[3]) > Date.parse(b[3])
        ? 1
        : Date.parse(b[3]) > Date.parse(a[3]) ? -1 : 0;
    })
    .map((event, i) => (
      <Link route={`/events/${event.address}`}>
        <Card key={i} fluid style={{ marginBottom: "50px" }}>
          <Card.Content
            header={`${event[6]} ${event[1] === event[8] ? "• SOLD OUT" : ""}`}
          />
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
            <div style={divContentStyle}>
              <Icon style={cardIconStyle} name="ticket" />
              {`${event[1] - event[8]} remaining tickets`}
            </div>
          </Card.Content>
        </Card>
      </Link>
    ));
}
