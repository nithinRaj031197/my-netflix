"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import Navbar from "../navbar";
import Banner from "../banner";
import { useContext, useEffect } from "react";
import { GlobalContext } from "@/context";
import { getAllfavorites, getPopularMedias, getTopratedMedias, getTrendingMedias } from "@/utils";

type CommonLayoutProps = {};

export default function CommonLayout({}: CommonLayoutProps) {
  const context = useContext(GlobalContext);

  useEffect(() => {
    async function getAllMedias() {
      const trendingTvShows = await getTrendingMedias("tv");
      const popularTvShows = await getPopularMedias("tv");
      const topratedTvShows = await getTopratedMedias("tv");

      const trendingMovieShows = await getTrendingMedias("movie");
      const popularMovieShows = await getPopularMedias("movie");
      const topratedMovieShows = await getTopratedMedias("movie");
      // const allFavorites = await getAllfavorites(
      //   session?.user?.uid,
      //   loggedInAccount?._id
      // );
      context?.setMediaData([
        ...[
          {
            title: "Trending TV Shows",
            medias: trendingTvShows,
          },
          {
            title: "Popular TV Shows",
            medias: popularTvShows,
          },
          {
            title: "Top rated TV Shows",
            medias: topratedTvShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "tv",
            // addedToFavorites:
            //   allFavorites && allFavorites.length
            //     ? allFavorites.map((fav) => fav.movieID).indexOf(mediaItem.id) >
            //       -1
            //     : false,
          })),
        })),
        ...[
          {
            title: "Trending Movies",
            medias: trendingMovieShows,
          },
          {
            title: "Popular Movies",
            medias: popularMovieShows,
          },
          {
            title: "Top rated Movies",
            medias: topratedMovieShows,
          },
        ].map((item) => ({
          ...item,
          medias: item.medias.map((mediaItem) => ({
            ...mediaItem,
            type: "movie",
            // addedToFavorites:
            //   allFavorites && allFavorites.length
            //     ? allFavorites.map((fav) => fav.movieID).indexOf(mediaItem.id) >
            //       -1
            //     : false,
          })),
        })),
      ]);

      // setPageLoader(false);
    }

    getAllMedias();
  }, []);

  const mediaData = context?.mediaData;

  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <Head>
        <title>My Netflix</title>
      </Head>
      <Navbar />
      <div className="relative pl-4 pb-24 lg:space-y-24">
        {mediaData && mediaData.length > 0 && (
          <>
            <Banner medias={mediaData && mediaData.length && mediaData[0].medias} />

            <section className="md:space-y-16">
              {mediaData && mediaData.length ? mediaData.map((item) => <p key={item?.id}>{item.title}</p>) : null}
            </section>
          </>
        )}
      </div>
    </motion.div>
  );
}
