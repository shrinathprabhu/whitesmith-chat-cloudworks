<template>
  <div class="h-screen flex flex-col overflow-hidden">
    <div>
      <AppHeader />
    </div>
    <div class="flex flex-grow">
      <AppSidebar />
      <div class="bg-zinc-100 flex-grow flex font-sans">
        <div class="flex-grow"></div>
        <UserPanelContainer />
      </div>
    </div>
  </div>
  <!-- <div class="flex font-sans">
    <div class="flex-grow"></div>
    <UserPanelContainer />
  </div> -->
</template>

<script>
export default {
  name: 'IndexPage',
  // layout: 'base',
}
</script>
