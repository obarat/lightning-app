import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Text from './text';
import { color } from './style';

//
// Header
//

const styles = StyleSheet.create({
  header: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shadow: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowColor: color.black,
    shadowOpacity: 0.3,
    zIndex: 1,
  },
  separator: {
    shadowOffset: { width: 0, height: 0.25 },
    shadowColor: color.white,
  },
  centerTitle: {
    justifyContent: 'center',
  },
});

export const Header = ({ style, children, color, shadow, separator }) => (
  <View
    style={[
      styles.header,
      !children.length ? styles.centerTitle : null,
      color ? { backgroundColor: color } : null,
      shadow ? styles.shadow : null,
      separator ? styles.separator : null,
      style,
    ]}
  >
    {children}
  </View>
);

Header.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
  color: PropTypes.string,
  shadow: PropTypes.bool,
  separator: PropTypes.bool,
};

//
// Title
//

const titleStyles = StyleSheet.create({
  titleWrapper: {
    alignItems: 'center',
  },
  title: {
    fontFamily: 'OpenSans Regular',
    fontSize: 15,
    letterSpacing: 2,
  },
  titleIcon: {
    marginTop: 4,
    fontSize: 14,
  },
});

export const Title = ({ title = '', style, children }) => (
  <View style={titleStyles.titleWrapper}>
    {children}
    <Text
      style={[
        titleStyles.title,
        children ? titleStyles.titleIcon : null,
        style,
      ]}
    >
      {title.toUpperCase()}
    </Text>
  </View>
);

Title.propTypes = {
  title: PropTypes.string,
  style: View.propTypes.style,
  children: PropTypes.node,
};

export default Header;
