export const getSingleItem = <T extends { items: T["items"] }, U>(
    items: T
): U => {
    return items.items[0] as never as U
}
