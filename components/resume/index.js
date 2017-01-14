import { Component } from "react";
import Resume from "./Resume";
import data from "../../data/resume.json";
import Head from "next/head";

export default () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Frederik Leidloff - Resume</title>
            <link rel="stylesheet" href="/static/pure-min.css" />
            <link rel="stylesheet" href="/static/grids-responsive-min.css" />
            <link rel="stylesheet" href="/static/resume.css" />
        </Head>
        <Resume {...data} />
    </div>
)
