import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'

const styles = theme => ({
  root: {
    padding: '0 !important',
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
})


class SimpleListMenu extends React.Component {
  button = null

  state = {
    anchorEl: null,
    selectedIndex: 0,
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { classes } = this.props
    const { anchorEl } = this.state

    return (
      <div className={classes.root}>
        <List component="nav">
          <ListItem
            button
            selected={true}
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label=""
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary={this.props.options[this.state.selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {this.props.options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    )
  }
}

SimpleListMenu.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SimpleListMenu)