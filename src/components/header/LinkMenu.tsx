import React from 'react'
import { Menu, Dropdown } from "semantic-ui-react";
import { numberOfItems } from "../../helpers/numberOfItems";
import { connect } from 'react-redux'
import { logout } from "../../redux/modules/user";
import { RootState } from "../../redux";

const mapStateToProps = (state: RootState) => ({
    username: state.user.username,
    numberOfItems: numberOfItems(state)
  });
  
const mapDispatchToProps = { logout };
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const UnconnectedLinkMenu :React.FC<Props>= ({logout,numberOfItems,username}) => {
    return (
     <Menu>

     </Menu>
    )
}

export const LinkMenu = connect(
    mapStateToProps,
    mapDispatchToProps
  )(UnconnectedLinkMenu);
  