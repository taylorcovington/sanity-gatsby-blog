// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// document schemas
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import siteConfig from "./documents/siteConfig";
import siteSettings from "./documents/siteSettings";
import page from "./documents/page";
import route from "./documents/route";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import cta from "./objects/cta";
import embedHTML from "./objects/embedHTML";
import figure from "./objects/figure";
import internalLink from "./objects/internalLink";
import link from "./objects/link";
import portableText from "./objects/portableText";
import simplePortableText from "./objects/simplePortableText";
import logo from "./objects/logo";

// Landing page sections
import hero from "./objects/hero";
import imageSection from "./objects/imageSection";
import mailchimp from "./objects/mailchimp";
import textSection from "./objects/textSection";
import testimonial from "./objects/testimonial";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "blog",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    siteConfig,
    post,
    category,
    author,
    page,
    route,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    cta,
    embedHTML,
    figure,
    hero,
    imageSection,
    internalLink,
    link,
    mailchimp,
    portableText,
    simplePortableText,
    textSection,
    logo,
    testimonial,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
