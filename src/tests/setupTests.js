import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
global.Promise = require.requireActual("promise");
Enzyme.configure({
  adapter: new Adapter()
});
