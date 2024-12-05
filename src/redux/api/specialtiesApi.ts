import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialties = baseApi.injectEndpoints({
    endpoints: (build) => ({
        createSpecialties: build.mutation({
            query: (data) => ({
                url: '/specialties',
                method: 'POST',
                contentType: 'multipart/form-data',
                data,
            }),
            invalidatesTags: [tagTypes.specialties]
        }),
        getALLSpecialties: build.query({
            query: () => ({
                url: '/specialties',
                method: 'GET',
            }),
            providesTags: [tagTypes.specialties],
        }),
        deleteSpecialties: build.mutation({
            query: (id) => ({
                url: `/specialties/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [tagTypes.specialties]
        }),
    }),
    overrideExisting: false,
});

export const { useCreateSpecialtiesMutation, useGetALLSpecialtiesQuery, useDeleteSpecialtiesMutation } = specialties;