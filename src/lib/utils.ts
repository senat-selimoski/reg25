export function classNames(...classes: (string | boolean | undefined)[]) {
    // Helper function to merge tailwind classes cleanly
    return classes.filter(Boolean).join(" ");
}