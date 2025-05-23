import { type components } from "@/api/strapi";

import Slideshow from "../components/shared-components/image-slider";
import Media from "../components/shared-components/media";
import Quote from "../components/shared-components/quote";
import RichText from "../components/shared-components/rich-text";
import VideoEmbed from "../components/shared-components/video-embed";


type Section =
  | components["schemas"]["SharedMediaComponent"]
  | components["schemas"]["SharedQuoteComponent"]
  | components["schemas"]["SharedRichTextComponent"]
  | components["schemas"]["SharedSliderComponent"]
  | components["schemas"]["SharedVideoEmbedComponent"];

export function postRenderer(section: Section, index: number) {
  switch (section.__component) {
    case "shared.rich-text":
      return <RichText key={index} {...section} />;
    case "shared.slider":
      return <Slideshow key={index} {...section} />;
    case "shared.quote":
      return <Quote key={index} {...section} />;
    case "shared.media":
      return <Media key={index} {...section} />;
    case "shared.video-embed":
      return <VideoEmbed key={index} {...section} />;
    default:
      return null;
  }
}
