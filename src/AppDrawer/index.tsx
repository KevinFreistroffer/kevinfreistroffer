// @flow",
import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";

type Props = {};
type State = {
  isOpen: boolean;
};

class AppDrawer extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    // this.drawerRef = createRef();

    this.state = {
      isOpen: false
    };
  }

  render() {
    return (
      <div>
        Drawer functional component
        <button
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen });
          }}
        >
          Toggle Drawer
        </button>
        <Drawer
          open={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        >
          Content
        </Drawer>
      </div>
    );
  }
}

export default AppDrawer;
