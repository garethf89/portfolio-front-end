export type Maybe<T> = T
export type InputMaybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
    [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
    T extends { [key: string]: unknown },
    K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
    | T
    | {
          [P in keyof T]?: P extends " $fragmentName" | "__typename"
              ? T[P]
              : never
      }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: { input: string; output: string }
    String: { input: string; output: string }
    Boolean: { input: boolean; output: boolean }
    Int: { input: number; output: number }
    Float: { input: number; output: number }
    DateTime: { input: any; output: any }
    Dimension: { input: any; output: any }
    HexColor: { input: any; output: any }
    JSON: { input: any; output: any }
    Quality: { input: any; output: any }
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
    __typename?: "Asset"
    contentType?: Maybe<Scalars["String"]["output"]>
    contentfulMetadata: ContentfulMetadata
    description?: Maybe<Scalars["String"]["output"]>
    fileName?: Maybe<Scalars["String"]["output"]>
    height?: Maybe<Scalars["Int"]["output"]>
    linkedFrom?: Maybe<AssetLinkingCollections>
    size?: Maybe<Scalars["Int"]["output"]>
    sys: Sys
    title?: Maybe<Scalars["String"]["output"]>
    url?: Maybe<Scalars["String"]["output"]>
    width?: Maybe<Scalars["Int"]["output"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
    transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

export type AssetCollection = {
    __typename?: "AssetCollection"
    items: Array<Maybe<Asset>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type AssetFilter = {
    AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
    OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
    contentType?: InputMaybe<Scalars["String"]["input"]>
    contentType_contains?: InputMaybe<Scalars["String"]["input"]>
    contentType_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    contentType_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    contentType_not?: InputMaybe<Scalars["String"]["input"]>
    contentType_not_contains?: InputMaybe<Scalars["String"]["input"]>
    contentType_not_in?: InputMaybe<
        Array<InputMaybe<Scalars["String"]["input"]>>
    >
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    description?: InputMaybe<Scalars["String"]["input"]>
    description_contains?: InputMaybe<Scalars["String"]["input"]>
    description_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    description_not?: InputMaybe<Scalars["String"]["input"]>
    description_not_contains?: InputMaybe<Scalars["String"]["input"]>
    description_not_in?: InputMaybe<
        Array<InputMaybe<Scalars["String"]["input"]>>
    >
    fileName?: InputMaybe<Scalars["String"]["input"]>
    fileName_contains?: InputMaybe<Scalars["String"]["input"]>
    fileName_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    fileName_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    fileName_not?: InputMaybe<Scalars["String"]["input"]>
    fileName_not_contains?: InputMaybe<Scalars["String"]["input"]>
    fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    height?: InputMaybe<Scalars["Int"]["input"]>
    height_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    height_gt?: InputMaybe<Scalars["Int"]["input"]>
    height_gte?: InputMaybe<Scalars["Int"]["input"]>
    height_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    height_lt?: InputMaybe<Scalars["Int"]["input"]>
    height_lte?: InputMaybe<Scalars["Int"]["input"]>
    height_not?: InputMaybe<Scalars["Int"]["input"]>
    height_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    size?: InputMaybe<Scalars["Int"]["input"]>
    size_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    size_gt?: InputMaybe<Scalars["Int"]["input"]>
    size_gte?: InputMaybe<Scalars["Int"]["input"]>
    size_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    size_lt?: InputMaybe<Scalars["Int"]["input"]>
    size_lte?: InputMaybe<Scalars["Int"]["input"]>
    size_not?: InputMaybe<Scalars["Int"]["input"]>
    size_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    url?: InputMaybe<Scalars["String"]["input"]>
    url_contains?: InputMaybe<Scalars["String"]["input"]>
    url_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    url_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    url_not?: InputMaybe<Scalars["String"]["input"]>
    url_not_contains?: InputMaybe<Scalars["String"]["input"]>
    url_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    width?: InputMaybe<Scalars["Int"]["input"]>
    width_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    width_gt?: InputMaybe<Scalars["Int"]["input"]>
    width_gte?: InputMaybe<Scalars["Int"]["input"]>
    width_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    width_lt?: InputMaybe<Scalars["Int"]["input"]>
    width_lte?: InputMaybe<Scalars["Int"]["input"]>
    width_not?: InputMaybe<Scalars["Int"]["input"]>
    width_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
}

export type AssetLinkingCollections = {
    __typename?: "AssetLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
    logoCollection?: Maybe<LogoCollection>
    pageContentFullSizeImageCollection?: Maybe<PageContentFullSizeImageCollection>
    pageContentImageCollection?: Maybe<PageContentImageCollection>
    projectCollection?: Maybe<ProjectCollection>
    skillCollection?: Maybe<SkillCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type AssetLinkingCollectionsLogoCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type AssetLinkingCollectionsPageContentFullSizeImageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type AssetLinkingCollectionsPageContentImageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type AssetLinkingCollectionsProjectCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type AssetLinkingCollectionsSkillCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum AssetOrder {
    ContentTypeAsc = "contentType_ASC",
    ContentTypeDesc = "contentType_DESC",
    FileNameAsc = "fileName_ASC",
    FileNameDesc = "fileName_DESC",
    HeightAsc = "height_ASC",
    HeightDesc = "height_DESC",
    SizeAsc = "size_ASC",
    SizeDesc = "size_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    UrlAsc = "url_ASC",
    UrlDesc = "url_DESC",
    WidthAsc = "width_ASC",
    WidthDesc = "width_DESC",
}

export type ContentfulMetadata = {
    __typename?: "ContentfulMetadata"
    concepts: Array<Maybe<TaxonomyConcept>>
    tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataConceptsDescendantsFilter = {
    id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ContentfulMetadataConceptsFilter = {
    descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>
    id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ContentfulMetadataFilter = {
    concepts?: InputMaybe<ContentfulMetadataConceptsFilter>
    concepts_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    tags?: InputMaybe<ContentfulMetadataTagsFilter>
    tags_exists?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type ContentfulMetadataTagsFilter = {
    id_contains_all?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    id_contains_none?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    id_contains_some?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
    __typename?: "ContentfulTag"
    id?: Maybe<Scalars["String"]["output"]>
    name?: Maybe<Scalars["String"]["output"]>
}

export type Entry = {
    contentfulMetadata: ContentfulMetadata
    sys: Sys
}

export type EntryCollection = {
    __typename?: "EntryCollection"
    items: Array<Maybe<Entry>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type EntryFilter = {
    AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
    OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePage = Entry &
    _Node & {
        __typename?: "HomePage"
        _id: Scalars["ID"]["output"]
        caseStudiesCollection?: Maybe<HomePageCaseStudiesCollection>
        contentfulMetadata: ContentfulMetadata
        description?: Maybe<Scalars["String"]["output"]>
        introText?: Maybe<HomePageIntroText>
        linkedFrom?: Maybe<HomePageLinkingCollections>
        logosCollection?: Maybe<HomePageLogosCollection>
        projectsCollection?: Maybe<HomePageProjectsCollection>
        skillsCollection?: Maybe<HomePageSkillsCollection>
        skillsText?: Maybe<HomePageSkillsText>
        statsCollection?: Maybe<HomePageStatsCollection>
        sys: Sys
        title?: Maybe<Scalars["String"]["output"]>
    }

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageCaseStudiesCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<HomePageCaseStudiesCollectionOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<ProjectFilter>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageDescriptionArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageIntroTextArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageLogosCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<HomePageLogosCollectionOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<LogoFilter>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageProjectsCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<HomePageProjectsCollectionOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<ProjectFilter>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageSkillsCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<HomePageSkillsCollectionOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<SkillFilter>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageSkillsTextArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageStatsCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<HomePageStatsCollectionOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<StatFilter>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/homePage) */
export type HomePageTitleArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

export type HomePageCaseStudiesCollection = {
    __typename?: "HomePageCaseStudiesCollection"
    items: Array<Maybe<Project>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export enum HomePageCaseStudiesCollectionOrder {
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    LinkAsc = "link_ASC",
    LinkDesc = "link_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export type HomePageCollection = {
    __typename?: "HomePageCollection"
    items: Array<Maybe<HomePage>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type HomePageFilter = {
    AND?: InputMaybe<Array<InputMaybe<HomePageFilter>>>
    OR?: InputMaybe<Array<InputMaybe<HomePageFilter>>>
    caseStudies?: InputMaybe<CfProjectNestedFilter>
    caseStudiesCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    description?: InputMaybe<Scalars["String"]["input"]>
    description_contains?: InputMaybe<Scalars["String"]["input"]>
    description_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    description_not?: InputMaybe<Scalars["String"]["input"]>
    description_not_contains?: InputMaybe<Scalars["String"]["input"]>
    description_not_in?: InputMaybe<
        Array<InputMaybe<Scalars["String"]["input"]>>
    >
    introText_contains?: InputMaybe<Scalars["String"]["input"]>
    introText_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    introText_not_contains?: InputMaybe<Scalars["String"]["input"]>
    logos?: InputMaybe<CfLogoNestedFilter>
    logosCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    projects?: InputMaybe<CfProjectNestedFilter>
    projectsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    skills?: InputMaybe<CfSkillNestedFilter>
    skillsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    skillsText_contains?: InputMaybe<Scalars["String"]["input"]>
    skillsText_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    skillsText_not_contains?: InputMaybe<Scalars["String"]["input"]>
    stats?: InputMaybe<CfStatNestedFilter>
    statsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type HomePageIntroText = {
    __typename?: "HomePageIntroText"
    json: Scalars["JSON"]["output"]
    links: HomePageIntroTextLinks
}

export type HomePageIntroTextAssets = {
    __typename?: "HomePageIntroTextAssets"
    block: Array<Maybe<Asset>>
    hyperlink: Array<Maybe<Asset>>
}

export type HomePageIntroTextEntries = {
    __typename?: "HomePageIntroTextEntries"
    block: Array<Maybe<Entry>>
    hyperlink: Array<Maybe<Entry>>
    inline: Array<Maybe<Entry>>
}

export type HomePageIntroTextLinks = {
    __typename?: "HomePageIntroTextLinks"
    assets: HomePageIntroTextAssets
    entries: HomePageIntroTextEntries
    resources: HomePageIntroTextResources
}

export type HomePageIntroTextResources = {
    __typename?: "HomePageIntroTextResources"
    block: Array<HomePageIntroTextResourcesBlock>
    hyperlink: Array<HomePageIntroTextResourcesHyperlink>
    inline: Array<HomePageIntroTextResourcesInline>
}

export type HomePageIntroTextResourcesBlock = ResourceLink & {
    __typename?: "HomePageIntroTextResourcesBlock"
    sys: ResourceSys
}

export type HomePageIntroTextResourcesHyperlink = ResourceLink & {
    __typename?: "HomePageIntroTextResourcesHyperlink"
    sys: ResourceSys
}

export type HomePageIntroTextResourcesInline = ResourceLink & {
    __typename?: "HomePageIntroTextResourcesInline"
    sys: ResourceSys
}

export type HomePageLinkingCollections = {
    __typename?: "HomePageLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
}

export type HomePageLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type HomePageLogosCollection = {
    __typename?: "HomePageLogosCollection"
    items: Array<Maybe<Logo>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export enum HomePageLogosCollectionOrder {
    DarkAsc = "dark_ASC",
    DarkDesc = "dark_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum HomePageOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export type HomePageProjectsCollection = {
    __typename?: "HomePageProjectsCollection"
    items: Array<Maybe<Project>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export enum HomePageProjectsCollectionOrder {
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    LinkAsc = "link_ASC",
    LinkDesc = "link_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export type HomePageSkillsCollection = {
    __typename?: "HomePageSkillsCollection"
    items: Array<Maybe<Skill>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export enum HomePageSkillsCollectionOrder {
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type HomePageSkillsText = {
    __typename?: "HomePageSkillsText"
    json: Scalars["JSON"]["output"]
    links: HomePageSkillsTextLinks
}

export type HomePageSkillsTextAssets = {
    __typename?: "HomePageSkillsTextAssets"
    block: Array<Maybe<Asset>>
    hyperlink: Array<Maybe<Asset>>
}

export type HomePageSkillsTextEntries = {
    __typename?: "HomePageSkillsTextEntries"
    block: Array<Maybe<Entry>>
    hyperlink: Array<Maybe<Entry>>
    inline: Array<Maybe<Entry>>
}

export type HomePageSkillsTextLinks = {
    __typename?: "HomePageSkillsTextLinks"
    assets: HomePageSkillsTextAssets
    entries: HomePageSkillsTextEntries
    resources: HomePageSkillsTextResources
}

export type HomePageSkillsTextResources = {
    __typename?: "HomePageSkillsTextResources"
    block: Array<HomePageSkillsTextResourcesBlock>
    hyperlink: Array<HomePageSkillsTextResourcesHyperlink>
    inline: Array<HomePageSkillsTextResourcesInline>
}

export type HomePageSkillsTextResourcesBlock = ResourceLink & {
    __typename?: "HomePageSkillsTextResourcesBlock"
    sys: ResourceSys
}

export type HomePageSkillsTextResourcesHyperlink = ResourceLink & {
    __typename?: "HomePageSkillsTextResourcesHyperlink"
    sys: ResourceSys
}

export type HomePageSkillsTextResourcesInline = ResourceLink & {
    __typename?: "HomePageSkillsTextResourcesInline"
    sys: ResourceSys
}

export type HomePageStatsCollection = {
    __typename?: "HomePageStatsCollection"
    items: Array<Maybe<Stat>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export enum HomePageStatsCollectionOrder {
    AmountAsc = "amount_ASC",
    AmountDesc = "amount_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export enum ImageFormat {
    Avif = "AVIF",
    /** JPG image format. */
    Jpg = "JPG",
    /**
     * Progressive JPG format stores multiple passes of an image in progressively higher detail.
     *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
     *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
     *         early as possible to make the layout look as designed.
     */
    JpgProgressive = "JPG_PROGRESSIVE",
    /** PNG image format */
    Png = "PNG",
    /**
     * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
     *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
     */
    Png8 = "PNG8",
    /** WebP image format. */
    Webp = "WEBP",
}

export enum ImageResizeFocus {
    /** Focus the resizing on the bottom. */
    Bottom = "BOTTOM",
    /** Focus the resizing on the bottom left. */
    BottomLeft = "BOTTOM_LEFT",
    /** Focus the resizing on the bottom right. */
    BottomRight = "BOTTOM_RIGHT",
    /** Focus the resizing on the center. */
    Center = "CENTER",
    /** Focus the resizing on the largest face. */
    Face = "FACE",
    /** Focus the resizing on the area containing all the faces. */
    Faces = "FACES",
    /** Focus the resizing on the left. */
    Left = "LEFT",
    /** Focus the resizing on the right. */
    Right = "RIGHT",
    /** Focus the resizing on the top. */
    Top = "TOP",
    /** Focus the resizing on the top left. */
    TopLeft = "TOP_LEFT",
    /** Focus the resizing on the top right. */
    TopRight = "TOP_RIGHT",
}

export enum ImageResizeStrategy {
    /** Crops a part of the original image to fit into the specified dimensions. */
    Crop = "CROP",
    /** Resizes the image to the specified dimensions, cropping the image if needed. */
    Fill = "FILL",
    /** Resizes the image to fit into the specified dimensions. */
    Fit = "FIT",
    /**
     * Resizes the image to the specified dimensions, padding the image if needed.
     *         Uses desired background color as padding color.
     */
    Pad = "PAD",
    /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
    Scale = "SCALE",
    /** Creates a thumbnail from the image. */
    Thumb = "THUMB",
}

export type ImageTransformOptions = {
    /**
     * Desired background color, used with corner radius or `PAD` resize strategy.
     *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
     */
    backgroundColor?: InputMaybe<Scalars["HexColor"]["input"]>
    /**
     * Desired corner radius in pixels.
     *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
     *         Defaults to `0`. Uses desired background color as padding color,
     *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
     */
    cornerRadius?: InputMaybe<Scalars["Int"]["input"]>
    /** Desired image format. Defaults to the original image format. */
    format?: InputMaybe<ImageFormat>
    /** Desired height in pixels. Defaults to the original image height. */
    height?: InputMaybe<Scalars["Dimension"]["input"]>
    /**
     * Desired quality of the image in percents.
     *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
     */
    quality?: InputMaybe<Scalars["Quality"]["input"]>
    /** Desired resize focus area. Defaults to `CENTER`. */
    resizeFocus?: InputMaybe<ImageResizeFocus>
    /** Desired resize strategy. Defaults to `FIT`. */
    resizeStrategy?: InputMaybe<ImageResizeStrategy>
    /** Desired width in pixels. Defaults to the original image width. */
    width?: InputMaybe<Scalars["Dimension"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/logo) */
export type Logo = Entry &
    _Node & {
        __typename?: "Logo"
        _id: Scalars["ID"]["output"]
        contentfulMetadata: ContentfulMetadata
        dark?: Maybe<Scalars["Boolean"]["output"]>
        linkedFrom?: Maybe<LogoLinkingCollections>
        logo?: Maybe<Asset>
        name?: Maybe<Scalars["String"]["output"]>
        sys: Sys
    }

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/logo) */
export type LogoDarkArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/logo) */
export type LogoLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/logo) */
export type LogoLogoArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/logo) */
export type LogoNameArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

export type LogoCollection = {
    __typename?: "LogoCollection"
    items: Array<Maybe<Logo>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type LogoFilter = {
    AND?: InputMaybe<Array<InputMaybe<LogoFilter>>>
    OR?: InputMaybe<Array<InputMaybe<LogoFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    dark?: InputMaybe<Scalars["Boolean"]["input"]>
    dark_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    dark_not?: InputMaybe<Scalars["Boolean"]["input"]>
    logo_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    name?: InputMaybe<Scalars["String"]["input"]>
    name_contains?: InputMaybe<Scalars["String"]["input"]>
    name_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    name_not?: InputMaybe<Scalars["String"]["input"]>
    name_not_contains?: InputMaybe<Scalars["String"]["input"]>
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    sys?: InputMaybe<SysFilter>
}

export type LogoLinkingCollections = {
    __typename?: "LogoLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
    homePageCollection?: Maybe<HomePageCollection>
}

export type LogoLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type LogoLinkingCollectionsHomePageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<
        Array<InputMaybe<LogoLinkingCollectionsHomePageCollectionOrder>>
    >
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum LogoLinkingCollectionsHomePageCollectionOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export enum LogoOrder {
    DarkAsc = "dark_ASC",
    DarkDesc = "dark_DESC",
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentFullSizeImage) */
export type PageContentFullSizeImage = Entry &
    _Node & {
        __typename?: "PageContentFullSizeImage"
        _id: Scalars["ID"]["output"]
        contentfulMetadata: ContentfulMetadata
        image?: Maybe<Asset>
        linkedFrom?: Maybe<PageContentFullSizeImageLinkingCollections>
        sys: Sys
        title?: Maybe<Scalars["String"]["output"]>
    }

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentFullSizeImage) */
export type PageContentFullSizeImageImageArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentFullSizeImage) */
export type PageContentFullSizeImageLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentFullSizeImage) */
export type PageContentFullSizeImageTitleArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

export type PageContentFullSizeImageCollection = {
    __typename?: "PageContentFullSizeImageCollection"
    items: Array<Maybe<PageContentFullSizeImage>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type PageContentFullSizeImageFilter = {
    AND?: InputMaybe<Array<InputMaybe<PageContentFullSizeImageFilter>>>
    OR?: InputMaybe<Array<InputMaybe<PageContentFullSizeImageFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    image_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PageContentFullSizeImageLinkingCollections = {
    __typename?: "PageContentFullSizeImageLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
    projectCollection?: Maybe<ProjectCollection>
}

export type PageContentFullSizeImageLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type PageContentFullSizeImageLinkingCollectionsProjectCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<
        Array<
            InputMaybe<PageContentFullSizeImageLinkingCollectionsProjectCollectionOrder>
        >
    >
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum PageContentFullSizeImageLinkingCollectionsProjectCollectionOrder {
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    LinkAsc = "link_ASC",
    LinkDesc = "link_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export enum PageContentFullSizeImageOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentImage) */
export type PageContentImage = Entry &
    _Node & {
        __typename?: "PageContentImage"
        _id: Scalars["ID"]["output"]
        contentfulMetadata: ContentfulMetadata
        image?: Maybe<Asset>
        linkedFrom?: Maybe<PageContentImageLinkingCollections>
        sys: Sys
        title?: Maybe<Scalars["String"]["output"]>
    }

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentImage) */
export type PageContentImageImageArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentImage) */
export type PageContentImageLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentImage) */
export type PageContentImageTitleArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

export type PageContentImageCollection = {
    __typename?: "PageContentImageCollection"
    items: Array<Maybe<PageContentImage>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type PageContentImageFilter = {
    AND?: InputMaybe<Array<InputMaybe<PageContentImageFilter>>>
    OR?: InputMaybe<Array<InputMaybe<PageContentImageFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    image_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PageContentImageLinkingCollections = {
    __typename?: "PageContentImageLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
    projectCollection?: Maybe<ProjectCollection>
}

export type PageContentImageLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type PageContentImageLinkingCollectionsProjectCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<
        Array<
            InputMaybe<PageContentImageLinkingCollectionsProjectCollectionOrder>
        >
    >
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum PageContentImageLinkingCollectionsProjectCollectionOrder {
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    LinkAsc = "link_ASC",
    LinkDesc = "link_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export enum PageContentImageOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentText) */
export type PageContentText = Entry &
    _Node & {
        __typename?: "PageContentText"
        _id: Scalars["ID"]["output"]
        body?: Maybe<PageContentTextBody>
        contentfulMetadata: ContentfulMetadata
        linkedFrom?: Maybe<PageContentTextLinkingCollections>
        sys: Sys
        title?: Maybe<Scalars["String"]["output"]>
    }

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentText) */
export type PageContentTextBodyArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentText) */
export type PageContentTextLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/pageContentText) */
export type PageContentTextTitleArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

export type PageContentTextBody = {
    __typename?: "PageContentTextBody"
    json: Scalars["JSON"]["output"]
    links: PageContentTextBodyLinks
}

export type PageContentTextBodyAssets = {
    __typename?: "PageContentTextBodyAssets"
    block: Array<Maybe<Asset>>
    hyperlink: Array<Maybe<Asset>>
}

export type PageContentTextBodyEntries = {
    __typename?: "PageContentTextBodyEntries"
    block: Array<Maybe<Entry>>
    hyperlink: Array<Maybe<Entry>>
    inline: Array<Maybe<Entry>>
}

export type PageContentTextBodyLinks = {
    __typename?: "PageContentTextBodyLinks"
    assets: PageContentTextBodyAssets
    entries: PageContentTextBodyEntries
    resources: PageContentTextBodyResources
}

export type PageContentTextBodyResources = {
    __typename?: "PageContentTextBodyResources"
    block: Array<PageContentTextBodyResourcesBlock>
    hyperlink: Array<PageContentTextBodyResourcesHyperlink>
    inline: Array<PageContentTextBodyResourcesInline>
}

export type PageContentTextBodyResourcesBlock = ResourceLink & {
    __typename?: "PageContentTextBodyResourcesBlock"
    sys: ResourceSys
}

export type PageContentTextBodyResourcesHyperlink = ResourceLink & {
    __typename?: "PageContentTextBodyResourcesHyperlink"
    sys: ResourceSys
}

export type PageContentTextBodyResourcesInline = ResourceLink & {
    __typename?: "PageContentTextBodyResourcesInline"
    sys: ResourceSys
}

export type PageContentTextCollection = {
    __typename?: "PageContentTextCollection"
    items: Array<Maybe<PageContentText>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type PageContentTextFilter = {
    AND?: InputMaybe<Array<InputMaybe<PageContentTextFilter>>>
    OR?: InputMaybe<Array<InputMaybe<PageContentTextFilter>>>
    body_contains?: InputMaybe<Scalars["String"]["input"]>
    body_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    body_not_contains?: InputMaybe<Scalars["String"]["input"]>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type PageContentTextLinkingCollections = {
    __typename?: "PageContentTextLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
    projectCollection?: Maybe<ProjectCollection>
}

export type PageContentTextLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type PageContentTextLinkingCollectionsProjectCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<
        Array<
            InputMaybe<PageContentTextLinkingCollectionsProjectCollectionOrder>
        >
    >
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum PageContentTextLinkingCollectionsProjectCollectionOrder {
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    LinkAsc = "link_ASC",
    LinkDesc = "link_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export enum PageContentTextOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type Project = Entry &
    _Node & {
        __typename?: "Project"
        _id: Scalars["ID"]["output"]
        contentfulMetadata: ContentfulMetadata
        coverImage?: Maybe<Asset>
        headline?: Maybe<Scalars["String"]["output"]>
        intro?: Maybe<ProjectIntro>
        link?: Maybe<Scalars["String"]["output"]>
        linkedFrom?: Maybe<ProjectLinkingCollections>
        pageContentCollection?: Maybe<ProjectPageContentCollection>
        skillsCollection?: Maybe<ProjectSkillsCollection>
        slug?: Maybe<Scalars["String"]["output"]>
        sys: Sys
        title?: Maybe<Scalars["String"]["output"]>
    }

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectCoverImageArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectHeadlineArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectIntroArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectLinkArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectPageContentCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<ProjectPageContentFilter>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectSkillsCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<ProjectSkillsCollectionOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<SkillFilter>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectSlugArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/project) */
export type ProjectTitleArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

export type ProjectCollection = {
    __typename?: "ProjectCollection"
    items: Array<Maybe<Project>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type ProjectFilter = {
    AND?: InputMaybe<Array<InputMaybe<ProjectFilter>>>
    OR?: InputMaybe<Array<InputMaybe<ProjectFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    coverImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    headline?: InputMaybe<Scalars["String"]["input"]>
    headline_contains?: InputMaybe<Scalars["String"]["input"]>
    headline_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    headline_not?: InputMaybe<Scalars["String"]["input"]>
    headline_not_contains?: InputMaybe<Scalars["String"]["input"]>
    headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    intro_contains?: InputMaybe<Scalars["String"]["input"]>
    intro_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    intro_not_contains?: InputMaybe<Scalars["String"]["input"]>
    link?: InputMaybe<Scalars["String"]["input"]>
    link_contains?: InputMaybe<Scalars["String"]["input"]>
    link_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    link_not?: InputMaybe<Scalars["String"]["input"]>
    link_not_contains?: InputMaybe<Scalars["String"]["input"]>
    link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    pageContent?: InputMaybe<CfpageContentMultiTypeNestedFilter>
    pageContentCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    skills?: InputMaybe<CfSkillNestedFilter>
    skillsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    slug?: InputMaybe<Scalars["String"]["input"]>
    slug_contains?: InputMaybe<Scalars["String"]["input"]>
    slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    slug_not?: InputMaybe<Scalars["String"]["input"]>
    slug_not_contains?: InputMaybe<Scalars["String"]["input"]>
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ProjectIntro = {
    __typename?: "ProjectIntro"
    json: Scalars["JSON"]["output"]
    links: ProjectIntroLinks
}

export type ProjectIntroAssets = {
    __typename?: "ProjectIntroAssets"
    block: Array<Maybe<Asset>>
    hyperlink: Array<Maybe<Asset>>
}

export type ProjectIntroEntries = {
    __typename?: "ProjectIntroEntries"
    block: Array<Maybe<Entry>>
    hyperlink: Array<Maybe<Entry>>
    inline: Array<Maybe<Entry>>
}

export type ProjectIntroLinks = {
    __typename?: "ProjectIntroLinks"
    assets: ProjectIntroAssets
    entries: ProjectIntroEntries
    resources: ProjectIntroResources
}

export type ProjectIntroResources = {
    __typename?: "ProjectIntroResources"
    block: Array<ProjectIntroResourcesBlock>
    hyperlink: Array<ProjectIntroResourcesHyperlink>
    inline: Array<ProjectIntroResourcesInline>
}

export type ProjectIntroResourcesBlock = ResourceLink & {
    __typename?: "ProjectIntroResourcesBlock"
    sys: ResourceSys
}

export type ProjectIntroResourcesHyperlink = ResourceLink & {
    __typename?: "ProjectIntroResourcesHyperlink"
    sys: ResourceSys
}

export type ProjectIntroResourcesInline = ResourceLink & {
    __typename?: "ProjectIntroResourcesInline"
    sys: ResourceSys
}

export type ProjectLinkingCollections = {
    __typename?: "ProjectLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
    homePageCollection?: Maybe<HomePageCollection>
}

export type ProjectLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type ProjectLinkingCollectionsHomePageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<
        Array<InputMaybe<ProjectLinkingCollectionsHomePageCollectionOrder>>
    >
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum ProjectLinkingCollectionsHomePageCollectionOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export enum ProjectOrder {
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    LinkAsc = "link_ASC",
    LinkDesc = "link_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export type ProjectPageContentCollection = {
    __typename?: "ProjectPageContentCollection"
    items: Array<Maybe<ProjectPageContentItem>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type ProjectPageContentFilter = {
    AND?: InputMaybe<Array<InputMaybe<ProjectPageContentFilter>>>
    OR?: InputMaybe<Array<InputMaybe<ProjectPageContentFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type ProjectPageContentItem =
    | PageContentFullSizeImage
    | PageContentImage
    | PageContentText

export type ProjectSkillsCollection = {
    __typename?: "ProjectSkillsCollection"
    items: Array<Maybe<Skill>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export enum ProjectSkillsCollectionOrder {
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Query = {
    __typename?: "Query"
    _node?: Maybe<_Node>
    asset?: Maybe<Asset>
    assetCollection?: Maybe<AssetCollection>
    entryCollection?: Maybe<EntryCollection>
    homePage?: Maybe<HomePage>
    homePageCollection?: Maybe<HomePageCollection>
    logo?: Maybe<Logo>
    logoCollection?: Maybe<LogoCollection>
    pageContentFullSizeImage?: Maybe<PageContentFullSizeImage>
    pageContentFullSizeImageCollection?: Maybe<PageContentFullSizeImageCollection>
    pageContentImage?: Maybe<PageContentImage>
    pageContentImageCollection?: Maybe<PageContentImageCollection>
    pageContentText?: Maybe<PageContentText>
    pageContentTextCollection?: Maybe<PageContentTextCollection>
    project?: Maybe<Project>
    projectCollection?: Maybe<ProjectCollection>
    skill?: Maybe<Skill>
    skillCollection?: Maybe<SkillCollection>
    stat?: Maybe<Stat>
    statCollection?: Maybe<StatCollection>
}

export type Query_NodeArgs = {
    id: Scalars["ID"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryAssetArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryAssetCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<AssetFilter>
}

export type QueryEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<EntryFilter>
}

export type QueryHomePageArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryHomePageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<HomePageOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<HomePageFilter>
}

export type QueryLogoArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryLogoCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<LogoOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<LogoFilter>
}

export type QueryPageContentFullSizeImageArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryPageContentFullSizeImageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<PageContentFullSizeImageOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<PageContentFullSizeImageFilter>
}

export type QueryPageContentImageArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryPageContentImageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<PageContentImageOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<PageContentImageFilter>
}

export type QueryPageContentTextArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryPageContentTextCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<PageContentTextOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<PageContentTextFilter>
}

export type QueryProjectArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryProjectCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<ProjectOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<ProjectFilter>
}

export type QuerySkillArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QuerySkillCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<SkillOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<SkillFilter>
}

export type QueryStatArgs = {
    id: Scalars["String"]["input"]
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

export type QueryStatCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<Array<InputMaybe<StatOrder>>>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
    where?: InputMaybe<StatFilter>
}

export type ResourceLink = {
    sys: ResourceSys
}

export type ResourceSys = {
    __typename?: "ResourceSys"
    linkType: Scalars["String"]["output"]
    urn: Scalars["String"]["output"]
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/skill) */
export type Skill = Entry &
    _Node & {
        __typename?: "Skill"
        _id: Scalars["ID"]["output"]
        contentfulMetadata: ContentfulMetadata
        icon?: Maybe<Asset>
        linkedFrom?: Maybe<SkillLinkingCollections>
        name?: Maybe<Scalars["String"]["output"]>
        sys: Sys
    }

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/skill) */
export type SkillIconArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/skill) */
export type SkillLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/skill) */
export type SkillNameArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

export type SkillCollection = {
    __typename?: "SkillCollection"
    items: Array<Maybe<Skill>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type SkillFilter = {
    AND?: InputMaybe<Array<InputMaybe<SkillFilter>>>
    OR?: InputMaybe<Array<InputMaybe<SkillFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    icon_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    name?: InputMaybe<Scalars["String"]["input"]>
    name_contains?: InputMaybe<Scalars["String"]["input"]>
    name_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    name_not?: InputMaybe<Scalars["String"]["input"]>
    name_not_contains?: InputMaybe<Scalars["String"]["input"]>
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    sys?: InputMaybe<SysFilter>
}

export type SkillLinkingCollections = {
    __typename?: "SkillLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
    homePageCollection?: Maybe<HomePageCollection>
    projectCollection?: Maybe<ProjectCollection>
}

export type SkillLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type SkillLinkingCollectionsHomePageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<
        Array<InputMaybe<SkillLinkingCollectionsHomePageCollectionOrder>>
    >
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type SkillLinkingCollectionsProjectCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<
        Array<InputMaybe<SkillLinkingCollectionsProjectCollectionOrder>>
    >
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum SkillLinkingCollectionsHomePageCollectionOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export enum SkillLinkingCollectionsProjectCollectionOrder {
    HeadlineAsc = "headline_ASC",
    HeadlineDesc = "headline_DESC",
    LinkAsc = "link_ASC",
    LinkDesc = "link_DESC",
    SlugAsc = "slug_ASC",
    SlugDesc = "slug_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export enum SkillOrder {
    NameAsc = "name_ASC",
    NameDesc = "name_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/stat) */
export type Stat = Entry &
    _Node & {
        __typename?: "Stat"
        _id: Scalars["ID"]["output"]
        amount?: Maybe<Scalars["Int"]["output"]>
        contentfulMetadata: ContentfulMetadata
        description?: Maybe<Scalars["String"]["output"]>
        linkedFrom?: Maybe<StatLinkingCollections>
        sys: Sys
    }

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/stat) */
export type StatAmountArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/stat) */
export type StatDescriptionArgs = {
    locale?: InputMaybe<Scalars["String"]["input"]>
}

/** [See type definition](https://app.contentful.com/spaces/z41luxcckja5/content_types/stat) */
export type StatLinkedFromArgs = {
    allowedLocales?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type StatCollection = {
    __typename?: "StatCollection"
    items: Array<Maybe<Stat>>
    limit: Scalars["Int"]["output"]
    skip: Scalars["Int"]["output"]
    total: Scalars["Int"]["output"]
}

export type StatFilter = {
    AND?: InputMaybe<Array<InputMaybe<StatFilter>>>
    OR?: InputMaybe<Array<InputMaybe<StatFilter>>>
    amount?: InputMaybe<Scalars["Int"]["input"]>
    amount_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    amount_gt?: InputMaybe<Scalars["Int"]["input"]>
    amount_gte?: InputMaybe<Scalars["Int"]["input"]>
    amount_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    amount_lt?: InputMaybe<Scalars["Int"]["input"]>
    amount_lte?: InputMaybe<Scalars["Int"]["input"]>
    amount_not?: InputMaybe<Scalars["Int"]["input"]>
    amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    description?: InputMaybe<Scalars["String"]["input"]>
    description_contains?: InputMaybe<Scalars["String"]["input"]>
    description_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    description_not?: InputMaybe<Scalars["String"]["input"]>
    description_not_contains?: InputMaybe<Scalars["String"]["input"]>
    description_not_in?: InputMaybe<
        Array<InputMaybe<Scalars["String"]["input"]>>
    >
    sys?: InputMaybe<SysFilter>
}

export type StatLinkingCollections = {
    __typename?: "StatLinkingCollections"
    entryCollection?: Maybe<EntryCollection>
    homePageCollection?: Maybe<HomePageCollection>
}

export type StatLinkingCollectionsEntryCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export type StatLinkingCollectionsHomePageCollectionArgs = {
    limit?: InputMaybe<Scalars["Int"]["input"]>
    locale?: InputMaybe<Scalars["String"]["input"]>
    order?: InputMaybe<
        Array<InputMaybe<StatLinkingCollectionsHomePageCollectionOrder>>
    >
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
    skip?: InputMaybe<Scalars["Int"]["input"]>
}

export enum StatLinkingCollectionsHomePageCollectionOrder {
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
    TitleAsc = "title_ASC",
    TitleDesc = "title_DESC",
}

export enum StatOrder {
    AmountAsc = "amount_ASC",
    AmountDesc = "amount_DESC",
    DescriptionAsc = "description_ASC",
    DescriptionDesc = "description_DESC",
    SysFirstPublishedAtAsc = "sys_firstPublishedAt_ASC",
    SysFirstPublishedAtDesc = "sys_firstPublishedAt_DESC",
    SysIdAsc = "sys_id_ASC",
    SysIdDesc = "sys_id_DESC",
    SysPublishedAtAsc = "sys_publishedAt_ASC",
    SysPublishedAtDesc = "sys_publishedAt_DESC",
    SysPublishedVersionAsc = "sys_publishedVersion_ASC",
    SysPublishedVersionDesc = "sys_publishedVersion_DESC",
}

export type Sys = {
    __typename?: "Sys"
    environmentId: Scalars["String"]["output"]
    firstPublishedAt?: Maybe<Scalars["DateTime"]["output"]>
    id: Scalars["String"]["output"]
    /** The locale that was requested. */
    locale?: Maybe<Scalars["String"]["output"]>
    publishedAt?: Maybe<Scalars["DateTime"]["output"]>
    publishedVersion?: Maybe<Scalars["Int"]["output"]>
    spaceId: Scalars["String"]["output"]
}

export type SysFilter = {
    firstPublishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
    firstPublishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    firstPublishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>
    firstPublishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>
    firstPublishedAt_in?: InputMaybe<
        Array<InputMaybe<Scalars["DateTime"]["input"]>>
    >
    firstPublishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>
    firstPublishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>
    firstPublishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>
    firstPublishedAt_not_in?: InputMaybe<
        Array<InputMaybe<Scalars["DateTime"]["input"]>>
    >
    id?: InputMaybe<Scalars["String"]["input"]>
    id_contains?: InputMaybe<Scalars["String"]["input"]>
    id_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    id_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    id_not?: InputMaybe<Scalars["String"]["input"]>
    id_not_contains?: InputMaybe<Scalars["String"]["input"]>
    id_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>
    publishedAt_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    publishedAt_gt?: InputMaybe<Scalars["DateTime"]["input"]>
    publishedAt_gte?: InputMaybe<Scalars["DateTime"]["input"]>
    publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>
    publishedAt_lt?: InputMaybe<Scalars["DateTime"]["input"]>
    publishedAt_lte?: InputMaybe<Scalars["DateTime"]["input"]>
    publishedAt_not?: InputMaybe<Scalars["DateTime"]["input"]>
    publishedAt_not_in?: InputMaybe<
        Array<InputMaybe<Scalars["DateTime"]["input"]>>
    >
    publishedVersion?: InputMaybe<Scalars["Float"]["input"]>
    publishedVersion_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    publishedVersion_gt?: InputMaybe<Scalars["Float"]["input"]>
    publishedVersion_gte?: InputMaybe<Scalars["Float"]["input"]>
    publishedVersion_in?: InputMaybe<
        Array<InputMaybe<Scalars["Float"]["input"]>>
    >
    publishedVersion_lt?: InputMaybe<Scalars["Float"]["input"]>
    publishedVersion_lte?: InputMaybe<Scalars["Float"]["input"]>
    publishedVersion_not?: InputMaybe<Scalars["Float"]["input"]>
    publishedVersion_not_in?: InputMaybe<
        Array<InputMaybe<Scalars["Float"]["input"]>>
    >
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
    __typename?: "TaxonomyConcept"
    id?: Maybe<Scalars["String"]["output"]>
}

export type _Node = {
    _id: Scalars["ID"]["output"]
}

export type CfLogoNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfLogoNestedFilter>>>
    OR?: InputMaybe<Array<InputMaybe<CfLogoNestedFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    dark?: InputMaybe<Scalars["Boolean"]["input"]>
    dark_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    dark_not?: InputMaybe<Scalars["Boolean"]["input"]>
    logo_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    name?: InputMaybe<Scalars["String"]["input"]>
    name_contains?: InputMaybe<Scalars["String"]["input"]>
    name_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    name_not?: InputMaybe<Scalars["String"]["input"]>
    name_not_contains?: InputMaybe<Scalars["String"]["input"]>
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    sys?: InputMaybe<SysFilter>
}

export type CfProjectNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfProjectNestedFilter>>>
    OR?: InputMaybe<Array<InputMaybe<CfProjectNestedFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    coverImage_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    headline?: InputMaybe<Scalars["String"]["input"]>
    headline_contains?: InputMaybe<Scalars["String"]["input"]>
    headline_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    headline_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    headline_not?: InputMaybe<Scalars["String"]["input"]>
    headline_not_contains?: InputMaybe<Scalars["String"]["input"]>
    headline_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    intro_contains?: InputMaybe<Scalars["String"]["input"]>
    intro_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    intro_not_contains?: InputMaybe<Scalars["String"]["input"]>
    link?: InputMaybe<Scalars["String"]["input"]>
    link_contains?: InputMaybe<Scalars["String"]["input"]>
    link_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    link_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    link_not?: InputMaybe<Scalars["String"]["input"]>
    link_not_contains?: InputMaybe<Scalars["String"]["input"]>
    link_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    pageContentCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    skillsCollection_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    slug?: InputMaybe<Scalars["String"]["input"]>
    slug_contains?: InputMaybe<Scalars["String"]["input"]>
    slug_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    slug_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    slug_not?: InputMaybe<Scalars["String"]["input"]>
    slug_not_contains?: InputMaybe<Scalars["String"]["input"]>
    slug_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type CfSkillNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfSkillNestedFilter>>>
    OR?: InputMaybe<Array<InputMaybe<CfSkillNestedFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    icon_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    name?: InputMaybe<Scalars["String"]["input"]>
    name_contains?: InputMaybe<Scalars["String"]["input"]>
    name_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    name_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    name_not?: InputMaybe<Scalars["String"]["input"]>
    name_not_contains?: InputMaybe<Scalars["String"]["input"]>
    name_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    sys?: InputMaybe<SysFilter>
}

export type CfStatNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfStatNestedFilter>>>
    OR?: InputMaybe<Array<InputMaybe<CfStatNestedFilter>>>
    amount?: InputMaybe<Scalars["Int"]["input"]>
    amount_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    amount_gt?: InputMaybe<Scalars["Int"]["input"]>
    amount_gte?: InputMaybe<Scalars["Int"]["input"]>
    amount_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    amount_lt?: InputMaybe<Scalars["Int"]["input"]>
    amount_lte?: InputMaybe<Scalars["Int"]["input"]>
    amount_not?: InputMaybe<Scalars["Int"]["input"]>
    amount_not_in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    description?: InputMaybe<Scalars["String"]["input"]>
    description_contains?: InputMaybe<Scalars["String"]["input"]>
    description_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    description_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    description_not?: InputMaybe<Scalars["String"]["input"]>
    description_not_contains?: InputMaybe<Scalars["String"]["input"]>
    description_not_in?: InputMaybe<
        Array<InputMaybe<Scalars["String"]["input"]>>
    >
    sys?: InputMaybe<SysFilter>
}

export type CfpageContentMultiTypeNestedFilter = {
    AND?: InputMaybe<Array<InputMaybe<CfpageContentMultiTypeNestedFilter>>>
    OR?: InputMaybe<Array<InputMaybe<CfpageContentMultiTypeNestedFilter>>>
    contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
    sys?: InputMaybe<SysFilter>
    title?: InputMaybe<Scalars["String"]["input"]>
    title_contains?: InputMaybe<Scalars["String"]["input"]>
    title_exists?: InputMaybe<Scalars["Boolean"]["input"]>
    title_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
    title_not?: InputMaybe<Scalars["String"]["input"]>
    title_not_contains?: InputMaybe<Scalars["String"]["input"]>
    title_not_in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>
}

export type HomeQueryVariables = Exact<{
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}>

export type HomeQuery = {
    __typename?: "Query"
    page?: {
        __typename?: "HomePageCollection"
        items: Array<{
            __typename?: "HomePage"
            title?: string
            description?: string
            introText?: { __typename?: "HomePageIntroText"; json: any }
            statsCollection?: {
                __typename?: "HomePageStatsCollection"
                items: Array<{
                    __typename?: "Stat"
                    amount?: number
                    description?: string
                }>
            }
            skillsText?: { __typename?: "HomePageSkillsText"; json: any }
            skillsCollection?: {
                __typename?: "HomePageSkillsCollection"
                items: Array<{
                    __typename?: "Skill"
                    name?: string
                    icon?: {
                        __typename?: "Asset"
                        fileName?: string
                        url?: string
                        title?: string
                    }
                }>
            }
            caseStudiesCollection?: {
                __typename?: "HomePageCaseStudiesCollection"
                items: Array<{
                    __typename?: "Project"
                    link?: string
                    slug?: string
                    title?: string
                    intro?: { __typename?: "ProjectIntro"; json: any }
                }>
            }
            projectsCollection?: {
                __typename?: "HomePageProjectsCollection"
                items: Array<{
                    __typename?: "Project"
                    slug?: string
                    headline?: string
                    title?: string
                    coverImage?: {
                        __typename?: "Asset"
                        fileName?: string
                        title?: string
                        width?: number
                        height?: number
                        url?: string
                        avifUrl?: string
                        webPUrl?: string
                    }
                }>
            }
            logosCollection?: {
                __typename?: "HomePageLogosCollection"
                items: Array<{
                    __typename?: "Logo"
                    name?: string
                    dark?: boolean
                    logo?: {
                        __typename?: "Asset"
                        contentType?: string
                        width?: number
                        height?: number
                        title?: string
                        fileName?: string
                        url?: string
                        avifUrl?: string
                        webPUrl?: string
                    }
                }>
            }
        }>
    }
}

export type ProjectPathsQueryVariables = Exact<{ [key: string]: never }>

export type ProjectPathsQuery = {
    __typename?: "Query"
    project?: {
        __typename?: "ProjectCollection"
        items: Array<{ __typename?: "Project"; slug?: string }>
    }
}

export type ProjectQueryVariables = Exact<{
    slug: Scalars["String"]["input"]
    limit: Scalars["Int"]["input"]
    preview?: InputMaybe<Scalars["Boolean"]["input"]>
}>

export type ProjectQuery = {
    __typename?: "Query"
    project?: {
        __typename?: "ProjectCollection"
        items: Array<{
            __typename?: "Project"
            slug?: string
            title?: string
            headline?: string
            link?: string
            skillsCollection?: {
                __typename?: "ProjectSkillsCollection"
                items: Array<{
                    __typename?: "Skill"
                    name?: string
                    icon?: {
                        __typename?: "Asset"
                        fileName?: string
                        url?: string
                        title?: string
                    }
                }>
            }
            pageContentCollection?: {
                __typename?: "ProjectPageContentCollection"
                items: Array<
                    | {
                          __typename?: "PageContentFullSizeImage"
                          type: "PageContentFullSizeImage"
                          image?: {
                              __typename?: "Asset"
                              contentType?: string
                              width?: number
                              height?: number
                              fileName?: string
                              title?: string
                              url?: string
                              blurURL?: string
                              avifUrl?: string
                              webPUrl?: string
                          }
                      }
                    | {
                          __typename?: "PageContentImage"
                          type: "PageContentImage"
                          image?: {
                              __typename?: "Asset"
                              contentType?: string
                              width?: number
                              height?: number
                              fileName?: string
                              title?: string
                              url?: string
                              blurURL?: string
                              avifUrl?: string
                              webPUrl?: string
                          }
                      }
                    | {
                          __typename?: "PageContentText"
                          type: "PageContentText"
                          body?: {
                              __typename?: "PageContentTextBody"
                              json: any
                          }
                      }
                >
            }
            coverImage?: {
                __typename?: "Asset"
                contentType?: string
                width?: number
                height?: number
                fileName?: string
                title?: string
                url?: string
                blurURL?: string
                avifUrl?: string
                webPUrl?: string
            }
        }>
    }
}

export type AllProjectsQueryVariables = Exact<{ [key: string]: never }>

export type AllProjectsQuery = {
    __typename?: "Query"
    project?: {
        __typename?: "ProjectCollection"
        items: Array<{
            __typename?: "Project"
            slug?: string
            title?: string
            headline?: string
            coverImage?: {
                __typename?: "Asset"
                contentType?: string
                width?: number
                height?: number
                fileName?: string
                title?: string
                url?: string
                blurURL?: string
                avifUrl?: string
                webPUrl?: string
            }
        }>
    }
}
