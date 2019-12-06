<template>
  <p class="action">
    <a
      class="action-button"
      rel="external"
      target="_blank"
      href="https://play.google.com/store/apps/details?id=es.edufdezsoy.manga2kindle"
      title="Download from Google Play"
    >
      <font-awesome-icon icon="download" />
      <span>Download</span>
    </a>

    <a class="action-button secondary"
      href="/pages/source-code"
       >
       <span>Explore Source Code</span>
       <font-awesome-icon icon="arrow-right" />
    </a>
  </p>
</template>
<style lang="stylus">
.action {
  margin: 1.8rem auto;
}

.action-button {
  display: inline-block;
  font-size: 1.2rem;
  color: #fff;
  background-color: $accentColor;
  padding: 0.8rem 1.6rem;
  border-radius: 4px;
  transition: background-color 0.1s ease;
  box-sizing: border-box;
  border-bottom: 1px solid darken($accentColor, 10%);

  &:hover {
    background-color: lighten($accentColor, 10%);
  }

  &.secondary {
    background-color: darken($borderColor, 5%);
    color: lighten($textColor, 50%);
    border-bottom-color: darken($borderColor, 15%);

    &:hover {
      background-color: lighten($borderColor, 5%);
    }
  }

  svg + span {
    margin-left: 0.5rem;
  }

  svg {
    height: 1em;
    width: 1em;
  }

  & + .action-button {
    margin-left: 0.5rem;
  }
}

@media (max-width: $MQMobile) {
  .action-button + .action-button {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}

@media (max-width: $MQMobileNarrow) {
  .action {
    margin: 1.2rem auto;
  }

  .action-button {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
  }
}
</style>
