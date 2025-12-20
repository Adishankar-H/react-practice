import Code from "./Code";
import Welcome from "./Welcome";

export default function ConditionalComponent() {
  const display = true;

  // *************Approach 1*****************
  // let element;

  // if (display) {
  //   element = <Welcome />;
  // } else {
  //   element = <Code />;
  // }

  // return element;

  // ############################################################################

  // *************Approach 2*****************
  // const element = display ? <Welcome /> : <Code />;
  // return element;

  // ############################################################################

  // *************Approach 3*****************
  return display ? <Welcome /> : <Code />;
}
