<template>
    <header class="vocab header small">
        <div class="vocab container">
            <div class="flex">
                <div id="branding-section">
                    <div id="branding-content">
                        <a href="" class="homelink">
                            <div class="vocab image-view brand-imagery normal-sized height-constrained">
                                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDEiIGhlaWdodD0iNDEiIHZpZXdCb3g9IjAgMCA0MSA0MSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTUuOTMyOSA2LjU0ODkxQzkuNjY4OCAyLjc3NDM5IDE0LjUwMzIgMC43NDk3NTYgMTkuOTk3IDAuNzQ5NzU2QzI1LjQ5MDcgMC43NDk3NTYgMzAuNDM1MiAyLjc3NDM5IDM0LjI4MDYgNi42MDM3M0MzOC4wNzE1IDEwLjM3ODkgNDAuMDQ5IDE1LjMwMjggNDAuMDQ5IDIwLjcxODhDNDAuMDQ5IDI2LjE4OTYgMzguMDcxNSAzMS4wNTg3IDM0LjMzNTYgMzQuNzI0MkMzMC4zODAyIDM4LjYwODQgMjUuMjcwNSA0MC42ODcyIDE5Ljk5NyA0MC42ODcyQzE0LjcyMzQgNDAuNjg3MiA5LjcyMzg1IDM4LjYwODQgNS44Nzg0OCAzNC43NzlDMi4wMzI0NyAzMC45NDkxIDAgMjYuMDI1MiAwIDIwLjcxODhDMCAxNS40NjY2IDIuMDg3NTIgMTAuNDMzNyA1LjkzMjkgNi41NDg5MVpNMzEuNjk4OSA5LjE3NTMyQzI4LjU2NzMgNi4wNTY3NyAyNC41NTY3IDQuMzYxMDcgMjAuMDUyIDQuMzYxMDdDMTUuNTQ3MyA0LjM2MTA3IDExLjU5MTIgNi4wMDI1OCA4LjUxNDYyIDkuMTIwNUM1LjM4MzAyIDEyLjI5MzkgMy42MjUxNyAxNi4zOTY3IDMuNjI1MTcgMjAuNzE4OEMzLjYyNTE3IDI0Ljk4NjEgNS4zODMwMiAyOS4wODg5IDguNTE0NjIgMzIuMjA4MUMxMS42NDU2IDM1LjMyNjYgMTUuNzExMiAzNy4wMjIzIDIwLjA1MTQgMzcuMDIyM0MyNC4zMzY1IDM3LjAyMjMgMjguNTExNiAzNS4zMjYgMzEuNzUzMyAzMi4xNTMzQzM0LjgyOTggMjkuMTQzNyAzNi40MjMyIDI1LjIwNDcgMzYuNDIzMiAyMC43MTg4QzM2LjQyMzIgMTYuMjg3NyAzNC43NzQ4IDEyLjIzOSAzMS42OTg5IDkuMTc1MzJaTTE5Ljc5MzIgMTcuNDAwNUMxOC42NjA1IDE1LjM0MzcgMTYuNzI4IDE0LjUyNTIgMTQuNDg0OSAxNC41MjUyQzExLjIxOTcgMTQuNTI1MiA4LjYyMDkzIDE2LjgyNTIgOC42MjA5MyAyMC43MTg4QzguNjIwOTMgMjQuNjc3OSAxMS4wNjQxIDI2LjkxMjQgMTQuNTk2MiAyNi45MTI0QzE2Ljg2MjIgMjYuOTEyNCAxOC43OTQgMjUuNjczNiAxOS44NjAzIDIzLjc5MzlMMTcuMzcyMiAyMi41MzNDMTYuODE2NiAyMy44NiAxNS45NzMxIDI0LjI1ODMgMTQuOTA2OSAyNC4yNTgzQzEzLjA2MyAyNC4yNTgzIDEyLjIxOTUgMjIuNzMyMSAxMi4yMTk1IDIwLjcxOTRDMTIuMjE5NSAxOC43MDY4IDEyLjkzMDEgMTcuMTc5OSAxNC45MDY5IDE3LjE3OTlDMTUuNDM5NyAxNy4xNzk5IDE2LjUwNTkgMTcuNDY3OSAxNy4xMjggMTguNzk0NEwxOS43OTMyIDE3LjQwMDVaTTI2LjA1MzIgMTQuNTI1MkMyOC4yOTY0IDE0LjUyNTIgMzAuMjI4MyAxNS4zNDM3IDMxLjM2MTYgMTcuNDAwNUwyOC42OTYzIDE4Ljc5NDRDMjguMDczNyAxNy40Njc5IDI3LjAwNzUgMTcuMTc5OSAyNi40NzQ3IDE3LjE3OTlDMjQuNDk3OSAxNy4xNzk5IDIzLjc4NjYgMTguNzA2OCAyMy43ODY2IDIwLjcxOTRDMjMuNzg2NiAyMi43MzIxIDI0LjYzMTQgMjQuMjU4MyAyNi40NzQ3IDI0LjI1ODNDMjcuNTQwOSAyNC4yNTgzIDI4LjM4NSAyMy44NiAyOC45NCAyMi41MzNMMzEuNDI4IDIzLjc5MzlDMzAuMzYxOCAyNS42NzM2IDI4LjQyOTkgMjYuOTEyNCAyNi4xNjQgMjYuOTEyNEMyMi42MzI1IDI2LjkxMjQgMjAuMTg4NyAyNC42Nzc5IDIwLjE4ODcgMjAuNzE4OEMyMC4xODg3IDE2LjgyNTIgMjIuNzg4MSAxNC41MjUyIDI2LjA1MzIgMTQuNTI1MloiIGZpbGw9ImJsYWNrIi8+PC9zdmc+" alt="Logo" />
                            </div>
                        </a>
                        <span class="branding-text">Global Summit</span>
                    </div>
                    <button class="vocab button orange-colored roundedly-rounded normal-sized" id="hamburger" type="button">
                        <div class="content">
                            <div class="fa-layers">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" class="icon svg-inline--fa fa-times fa-w-11"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" class=""></path></svg><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="icon svg-inline--fa fa-bars fa-w-14 active"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" class=""></path></svg>
                            </div>
                        </div>
                    </button>
                </div>
                <div id="content-section">
                    <nav class="vocab navigation">
                        <ul class="links">
                            <li class="link">
                                <a href="#"><span>Home page</span></a>
                            </li>
                            <li class="link">
                                <a href="#"><span>About</span></a>
                            </li>
                            <li class="link menu-item-has-children">
                                <a href="#"><span>Test</span></a>
                                <ul class="sub-menu">
                                    <li class="menu-item link">
                                        <a href="#">Item 1</a>
                                    </li>
                                    <li class="menu-item link">
                                        <a href="#">Item 2</a>
                                    </li>
                                    <li class="menu-item link">
                                        <a href="#">Item 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="link">
                                <a href="#"><span>Contact</span></a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
  export default {
    name: 'headersmall'
  }
</script>
