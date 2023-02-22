<a href="https://openverse.org">
  <img src="brand/banner.svg" width="100%" alt="Visit Openverse.org"/>
</a>

<p align="center">
  <a href="https://openverse.org">Openverse</a> | 
  <a href="https://github.com/orgs/WordPress/projects/70">Projects</a> |
  <a href="https://make.wordpress.org/openverse/">Community Site</a> |
  <a href="https://make.wordpress.org/chat/">Chat (#openverse)</a> |
  <a href="https://make.wordpress.org/openverse/handbook/openverse-handbook/">Handbook</a> |
  <a href="https://make.wordpress.org/design/handbook/">Design Handbook</a> |
  <a href="https://www.figma.com/file/GIIQ4sDbaToCfFQyKMvzr8/Openverse-Design-Library?node-id=0%3A1">Design Library</a>
</p>

<p align="center">
  Openverse is a search engine for openly-licensed media.
</p>

# Openverse

Openverse is a powerful search engine for GPL-compatible images, audio, and
more. Openverse is live at [openverse.org](https://openverse.org).

This repository contains most of the codebase, except for the Openverse catalog.
Eventually the catalog will be merged into this repository as well.

- [Catalog](https://github.com/wordpress/openverse-catalog) | The Apache
  Airflow-powered system for downloading and storing Openverse's metadata
- [Ingestion server](ingestion_server/) | The mechanism for refreshing the data
  from the catalog to the API
- [API](api/) | The Django REST API for querying the database, used by the
  frontend
- [Frontend](frontend/) | The public search engine at
  [openverse.org](https://openverse.org), built with Vue and Nuxt
- [Automations](automations/) | Scripts used for various workflows around
  Openverse repositories and processes

This repository also contains the following directories.

- [Brand](brand/) | Brand assets for Openverse such as logo and icon and
  guidelines for using these assets
- [RFCs](rfcs/) | Proposals and planning documents for discussing changes to
  Openverse
- [Templates](templates/) | Common scaffolding code that is rendered and synced
  to the catalog repo

## Contributing

Pull requests are welcome! Feel free to
[join us on Slack](https://make.wordpress.org/chat/) and discuss the project
with the engineers and community members on #openverse.

You are welcome to take any open issue in the tracker labelled
[`help wanted`](https://github.com/WordPress/openverse/labels/help%20wanted) or
[`good first issue`](https://github.com/WordPress/openverse/labels/good%20first%20issue);
**there's no need to ask for permission in advance**. Other issues are open for
contribution as well, but may be less accessible or well-defined in comparison
to those that are explicitly labelled.

See the [`CONTRIBUTING.md`](CONTRIBUTING.md) file for details.

## Acknowledgments

Openverse, previously known as CC Search, was conceived and built at
[Creative Commons](https://creativecommons.org). We thank them for their
commitment to open source and openly licensed content, with particular thanks to
previous team members @ryanmerkley, @janetpkr, @lizadaly, @sebworks, @pa-w,
@kgodey, @annatuma, @mathemancer, @aldenstpage, @brenoferreira, and @sclachar,
along with their
[community of volunteers](https://opensource.creativecommons.org/community/community-team/).
