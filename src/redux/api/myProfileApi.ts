
import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi'

const myProfileApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMyProfile: build.query({
            query: () => {
                return {
                    url: '/user/me',
                    method: 'GET',
                }
            },
            providesTags: [tagTypes.user],
        }),
        updateMyProfile: build.mutation({
            query: (data) => {
                return {
                    url: '/use/update-my-profile',
                    method: 'PATCH',
                    data,
                    contentType: 'multipart/form-data'
                }
            },
            invalidatesTags: [tagTypes.user]
        })

    })
})

export const {
    useGetMyProfileQuery,
    useUpdateMyProfileMutation
} = myProfileApi;