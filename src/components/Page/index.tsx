import {Layout} from '@ui-kitten/components';
import React from 'react';
import {StyleSheet} from 'react-native';

type TPageProps = {
  children: React.ReactChild | React.ReactChild[];
};

const Page = ({children}: TPageProps) => (
  <Layout style={styles.container}>{children}</Layout>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default Page;
