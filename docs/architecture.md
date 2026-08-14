# Vastra Reloved architecture

Vastra Reloved is a modular monolith: one Next.js application with clear internal
domain boundaries. It is not a microservice system.

## Project boundaries

- `app/` contains App Router routes, route-level composition, and shared layouts.
- `components/` contains reusable, domain-neutral presentation primitives.
- `features/` contains business-domain modules. A feature owns its UI, types, and
  future data-access or server-side code; other features should use only its
  explicitly exported surface.
- `lib/` contains small framework-agnostic shared utilities. Business rules do
  not belong here.

## Initial modules

- `listings`: marketplace items across all supported categories, not clothing only.
- `categories`: product taxonomy and category browsing.
- `search`: listing discovery, search state, and future filters.
- `availability`: whether an item is available for its owner-defined use.
- `contact-unlock`: access to owner contact details after the applicable platform
  rules are satisfied.
- `users`: user-facing account concepts that do not require authentication yet.
- `verification`: owner verification states and related presentation.

Directories are intentionally empty until their implementation begins. Additional
domains—such as authentication, payments, plans, notifications, reports,
moderation, and administration—will be created only when needed.

## Marketplace boundary

The platform facilitates discovery, availability checks, and contact unlocking.
Owners retain responsibility for their items, including quality, delivery,
alterations, dry cleaning, inventory, negotiation, and the final sale or rental
transaction. These boundaries should remain explicit as capabilities are added.

## Growth rules

- Keep route files lightweight and move feature-specific code into `features/`.
- Avoid cross-feature imports into internal implementation files.
- Add a dependency only when a current capability needs it.
- Introduce persistence, APIs, authentication, or external providers only with a
  concrete feature requirement.
