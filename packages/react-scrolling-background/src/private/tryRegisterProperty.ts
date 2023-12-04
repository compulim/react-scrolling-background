type RegisterProperty = typeof CSS.registerProperty;

export default function tryRegisterProperty(definition: Parameters<RegisterProperty>[0]) {
  try {
    CSS?.registerProperty?.(definition);
  } catch (error) {}
}
