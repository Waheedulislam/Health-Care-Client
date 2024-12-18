import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'

export const userApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getSingleUser: build.query({
            query: () => ({
                url: '/user/me',
                method: 'GET',
            }),
            providesTags: [tagTypes.user]
        }),
    }),
    overrideExisting: false,
})

export const { useGetSingleUserQuery } = userApi;