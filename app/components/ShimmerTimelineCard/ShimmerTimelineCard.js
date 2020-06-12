import React, { Component } from 'react';
import { Text, View } from 'react-native';
import TimelineCircle from 'saeko-native/app/components/TimelineCircle';
import Shimmer from 'saeko-native/app/components/Shimmer';

import { Colors } from 'saeko-native/app/styles';

import SimpleCard from 'saeko-native/app/components/SimpleCard';
import styles from './ShimmerTimelineCardStyle';

export default class ShimmerTimelineCard extends Component {
  render() {
    let bg = { backgroundColor: Colors.light };
    let shimmerColors = ['#F0F0F0', '#DEDEDE', '#EDEDED'];

    return (
      <View style={[styles.row, styles.timelineCard]}>
        <Shimmer
          duration={1000}
          autoRun={true}
          style={[{ height: 16 }, bg, styles.time]}
          colorShimmer={shimmerColors}
        />
        <View style={[styles.alignItemsCenter, styles.paddingTop]}>
          <TimelineCircle color="gray" />
          <View style={styles.verticalDivider} />
        </View>
        <View
          style={[
            styles.dataContainer,
            styles.baseLeftMargin,
            styles.flex1,
            styles.baseRightMargin
          ]}>
          <SimpleCard addVerticalPadding border>
            <View style={styles.baseHorizontalMargin}>
              <Shimmer
                colorShimmer={shimmerColors}
                duration={1000}
                autoRun={true}
                style={[
                  { height: 16, width: '50%' },
                  styles.smallestBottomMargin
                ]}
              />
              <Shimmer
                colorShimmer={shimmerColors}
                duration={1000}
                autoRun={true}
                style={[
                  { height: 14, width: '50%' },
                  styles.smallestBottomMargin
                ]}
              />
              <View style={[styles.antiRow, styles.smallBottomMargin]}>
                <Shimmer
                  colorShimmer={shimmerColors}
                  duration={1000}
                  autoRun={true}
                  style={[{ height: 16, width: '30%' }]}
                />
              </View>
            </View>
          </SimpleCard>
        </View>
      </View>
    );
  }
}
