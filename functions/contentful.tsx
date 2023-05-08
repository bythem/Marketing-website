import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";


const cont = require("contentful");
import Header from "../components/Header";
import Layout from "../components/Layout";


const spaceID = "dfkehpamrh5t";
// Client used to fetch contentful data
export const contentful = cont.createClient({
 space: spaceID,
 accessToken: "UYkeC9-YdLLl2klV52eetFWL5H1RrsA0NPjlvKtrFkA",
 resolveLinks: true,
});


// client used to fetch contentful preview data
export const preview = cont.createClient({
 space: "dfkehpamrh5t",
 accessToken: "UYkeC9-YdLLl2klV52eetFWL5H1RrsA0NPjlvKtrFkA",
 host: "preview.contentful.com",
});


// client to fetch contentful data via graphql


// recursively go through the returned data and just leave the fields content
export const parseContent = (data: any) => {
 if (!data) return null;
 const parsed = contentful.parseEntries(data).fields;


 parsed &&
   Object.keys(parsed).forEach((prop) => {
     if (Array.isArray(parsed[prop]) && typeof parsed[prop][0] !== "string") {
       parsed[prop] = parsed[prop].map((subitem: any) =>
         parseContent(subitem)
       );
     }
     if (parsed[prop].sys && parsed[prop].sys.id) {
       parsed[prop] = parseContent(parsed[prop]);
     }
   });


 return parsed || null;
};


export const parseTagsContent = (data:Array<any>)=>{
 if(data.length >0){
   const parsed: Array<any>=[];
   data.forEach((item)=>{
     parsed.push(item.fields);
   })
   return parsed;
 }
 else{
   return null;
 }
}


// HOC to provide preview data when the "preview" query string is present
export const withPreview = (fetchData: any) => (
 WrappedComponent: React.Component
) => (props: any) => {
 const router = useRouter();
 const [previewData, setPreviewData] = useState<any>();


 // If preview query string is present, fetch the preview data.
 useEffect(() => {
   if (router.query.preview && !previewData) {
     fetchData(preview).then(setPreviewData);
   }
 }, [router]);


 // if there's preview data, merge it onto the passed props;
 const sentProps = { ...props, ...previewData, router } || props;


 // if the preview data is loading, show empty layout with spinner
 return router.query?.preview && !previewData ? (
   <Layout>
     <Header />
     <section
       className="hero-banner"
       style={{ display: "flex", justifyContent: "center" }}
     >
     Loading...
     </section>
   </Layout>
 ) : (
   <div {...sentProps} />
 );
};
withPreview.displayName = `withPreview`;





// Contentful Content Models Interfaces
export interface File {
 url: string;
 fileName: string;
 contentType?: string;
 details?: {
   image: {
     height: number;
     width: number;
   };
 };
}


export interface Image {
 title?: string;
 description?: string;
 file?: File;
 url?: string;
}


export interface Video {
 title?: string;
 description?: string;
 file: File;
}


export interface Script {
 title: string;
 scriptUrl?: string;
 inlineScript?: string;
 location: boolean;
}


export interface MediaObject {
 title: string;
 description: string;
 imageUrl?: string;
 icon?: any;
 image?: any;
 content?: any;
 id?: string;
 videoUrl?: string;
 video?: any;
 people?: Array<Person>;
}


export interface Section {
 description?: string;
 header?: string;
 title?: string;
 subtitle?: string;
 content?: any;
 ctaLabel?: string;
 ctaLink?: string;
 image?: Image;
 video?: Video;
 imageUrl?: string;
 mobileImage?: Image;
 mobileImageUrl?: string;
 customDate?:Date;
 customTag?:string;
}


export interface MetaTags {
 title: string;
 description: string;
 image?: Image;
 url?: string;
 scripts: Script[];
 noIndex?: boolean;
 canonical?: boolean;
}


export interface Document {
 metaTagsAndScripts: MetaTags;
 url: string;
 title: string;
 category: string;
 content: any;
 image: Image;
 thumbnail: Image;
 document: Image;
 hubspotFormId?: string;
 marketoFormId?: string;
 ctaLabel?: string;
 downloadLink?:string;
 downloadLinkLabel?:string;
 thankYouContent?:any;
}


export interface Testimonial {
 authorName: string;
 authorInfo: string;
 message: string;
 imageUrl?: string;
 image?: Image;
 bgColor?: string;
 columnIndent?: number;
 imageBgColor?:string;
}


export interface TableRow {
 title: string;
 titleLink?: string;
 developerContent?: string;
 developerChecked?: boolean;
 proContent?: string;
 proChecked?: boolean;
 enterpriseContent?: string;
 enterpriseChecked?: boolean;
}


export interface TableCategory {
 title: string;
 rows: TableRow[];
}


export interface Company {
 name: string;
 logoLight: Image;
 logoDark: Image;
}


export interface Person {
 name: string;
 title: string;
 company: Company;
 image: Image;
 bio: string;
 url: string;
}


export interface Event {
 name?: string;
 metadata?: MetaTags;
 tagline?: string;
 dates?: string;
 description?: string;
 formId?: string;
 takeaways?: Array<MediaObject>;
 speakers?: Array<Person>;
 agenda?: Array<EventDay>;
 postEventBlurb?: string;
 eventConcluded?: boolean;
}


export interface EventDay {
 date?: string;
 blocks?: Array<EventBlock>;
}


export interface EventBlock {
 time?: string;
 sessions?: Array<EventSession>;
}


export interface EventSession {
 name?: string;
 type?: string;
 topic1Description?: string;
 topic1Speakers?: Array<Person>;
 topic2Description?: string;
 topic2Speakers?: Array<Person>;
 specialNote?: string;
 recordingUrl?: string;
 recordings?: Array<MediaObject>;
}




export interface PageSectionContent {
 nameOfContentSection?: string;
 title?:string;
 subtitle?:string;
 richText?: any;
 assets?: any;
 linksToEntries?:any;
 assetsCollection?:any
}




export type FlexibleCardProps = {
 body?: string;
 name?: string;
 heading?: string;
 icon?: Image;
 image?: Image;
 url?: string;
 ctaText?: string;
 flexibleContent?: any;
 searchableContent?:string;
 isActive?: boolean;
 contentType?:string;
 customData?:any;
 assets?:Image[];
 video?:Video;
}




export type CustomerStoryProps ={
 title?:string;
 isFeatured:boolean;
 url:string;
 body:string;
 problemV2:any;
 solutionV2:any;
 resultV2:any;
 logodark?:Image;
 heroImage?:Image;
 category?:string;
}


export type DatasetProps ={
 name?:string;
 metaTags?: MetaTags;
 description:string;
 url:string;
 tags:any;
 coverImage?:Image;
 richText?:any;
 ctaText?:string;
 ctaUrl?:string;
 heroImage?:Image;
 sourcePublishedOn?:Date;
 version?:string;
 doi?:string;
 contributors?:string;
 citation?:string;
 license?:string;
 licenseUrl?:string;
}




export type SolutionProps ={
 title:string;
 metaTags: MetaTags;
 heading:string;
 url:string;
 description?:any;
 heroImage?:Image;
 heroVideo?:Video;
 logos?:FlexibleCardProps;
 testimonial1?:FlexibleCardProps;
 features?:FlexibleCardProps[];
 testimonial2?:FlexibleCardProps;
 customerStoriesTitle?:string;
 customerStories?:CustomerStoryProps[];
}



