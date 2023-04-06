import type { SearchType } from "~/constants/media"
/**
 * compound type of all custom events sent from the site; Index with `EventName`
 * to get the type of the payload for a specific event.
 *
 * Conventions:
 * - Names should be in SCREAMING_SNAKE_CASE.
 * - Names should be imperative for events associated with user action.
 * - Names should be in past tense for events not associated with user action.
 * - Documentation must be the step to emit the event, followed by a line break.
 * - Questions that are answered by the event must be listed as bullet points.
 */
export type Events = {
  /**
   * Click on one of the images in the gallery on the homepage.
   *
   * - Do users know homepage images are links?
   * - Do users find these images interesting?
   * - Which set is most interesting for the users?
   */
  CLICK_HOME_GALLERY_IMAGE: {
    /** the set to which the image belongs */
    set: string
    /** the identifier of the image */
    identifier: string
  }
  /**
   * Description: Whenever a user changes the content type
   * Questions:
   *   - Which content types are most popular?
   *   - Is there interest in the non-supported content types?
   *   - Do users switch content types? Where in their journeys?
   */
  CHANGE_CONTENT_TYPE: {
    /** The previously-set media type */
    previous: SearchType
    /** The new media type */
    next: SearchType
    /** The name of the Vue component used to switch content types. */
    component: string
  }
}

/**
 * the name of a custom event sent from the site
 */
export type EventName = keyof Events
