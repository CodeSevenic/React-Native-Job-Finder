import React, { useCallback, useState } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { Stack, useRouter, useSearchParams, useGlobalSearchParams } from 'expo-router';

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from '../../components';
import { COLORS, icons, SIZES } from '../../constants';
import useFetch from '../../hook/useFetch';

const JobDetails = () => {
  const params = useGlobalSearchParams();
  console.log(params.id);
  const router = useRouter();
  // const { data, isLoading, error, refetch } = useFetch(`jobs-details`, {
  //   job_id: params.id,
  // });

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {};

  console.log('Job Details Component rendered');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />,
          headerTitle: '',
        }}
      >
        <>
          <ScrollView showsVerticalScrollIndicator={false}></ScrollView>
        </>
      </Stack.Screen>
    </SafeAreaView>
  );
};

export default JobDetails;
