// Types for the PocketBase collections this site reads.
// Fields match the collections in the PocketBase admin.
// Rich text fields contain HTML from the PocketBase editor.

/** Fields every PocketBase record has. */
export interface BaseRecord {
  id: string;
  collectionId: string;
  collectionName: string;
  created: string;
  updated: string;
}

/** A field that holds an uploaded file: PocketBase stores its file name. */
type FileName = string;
/** A rich text field: HTML from the PocketBase editor. */
type RichText = string;

export interface HeroRecord extends BaseRecord {
  heading1: string;
  heading2: string;
  hero_image: FileName;
  text1: string;
  text2: string;
  text3: string;
}

export interface AboutRecord extends BaseRecord {
  subtitle: string;
  title: string;
  text: string;
  content: RichText;
  content2: RichText;
  content3: RichText;
  img1: FileName;
  img2: FileName;
  img3: FileName;
  img4: FileName;
}

export interface NasvetiRecord extends BaseRecord {
  subtitle: string;
  title: string;
  content: RichText;
  img: FileName;
}

export interface DodatniNapotkiRecord extends BaseRecord {
  subtitle: string;
  title: string;
  text: string;
  content: RichText;
  img: FileName;
}

export interface DarilniBoniRecord extends BaseRecord {
  title: string;
  content: RichText;
  img: FileName;
}

export interface FaqRecord extends BaseRecord {
  question: string;
  answer: RichText;
}

export interface MerchContentRecord extends BaseRecord {
  subtitle: string;
  title: string;
  text: string;
  content: RichText;
}

export interface ImageRecord extends BaseRecord {
  img: FileName;
}

export interface PortfolioTextRecord extends BaseRecord {
  subtitle: string;
  title: string;
  text: string;
  content: RichText;
}

export interface NegaRecord extends BaseRecord {
  subtitle: string;
  title: string;
  text1: string;
  content1: RichText;
  content2: RichText;
  content3: RichText;
  img1: FileName;
  img2: FileName;
}

export interface KremeRecord extends BaseRecord {
  subtitle: string;
  title: string;
  content: RichText;
  img: FileName;
}

/** Maps each collection name to the type of its records. */
export interface Collections {
  hero: HeroRecord;
  about: AboutRecord;
  nasveti: NasvetiRecord;
  dodatni_napotki: DodatniNapotkiRecord;
  darilni_boni: DarilniBoniRecord;
  FAQ: FaqRecord;
  merch_content: MerchContentRecord;
  merch_images: ImageRecord;
  portfolio: ImageRecord;
  portfolio_text: PortfolioTextRecord;
  nega: NegaRecord;
  kreme_za_nego: KremeRecord;
}

export type CollectionName = keyof Collections;
