import { StackNavigator } from "react-navigation";
import StackViews from "./StackViews";

const EventsApp = StackNavigator({
  EventsView: StackViews.EventsView,
  SingleEventView: StackViews.SingleEventView,
  SingleContactView: StackViews.SingleContactView,
});

export default EventsApp;
