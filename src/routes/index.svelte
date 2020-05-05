<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	p {
		font-size: 1rem;
	}

	a {
		text-decoration: none;
	}

	.title {
		-webkit-font-smoothing: antialiased;
		color: #35495e;
		letter-spacing: 1px;
		font-weight: bold;
		background: linear-gradient(90deg, rgba(12, 149, 211, 1) 0%, rgba(76, 128, 193, 1) 6%, rgba(106, 113, 181, 1) 20%, rgba(119, 109, 178, 1) 33%, rgba(183, 93, 164, 1) 43%, rgba(208, 97, 155, 1) 52%, rgba(225, 115, 92, 1) 68%, rgba(237, 126, 45, 1) 81%, rgba(244, 134, 32, 1) 94%, rgba(246, 137, 31, 1) 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		cursor: pointer;
	}

	.title:hover {
		background-size: 500% 500%;
		-webkit-animation: hue 3s ease infinite;
		-moz-animation: hue 3s ease infinite;
		animation: hue 3s ease infinite;
	}

	@-webkit-keyframes hue {
		0% {
			background-position: right center
		}

		50% {
			background-position: center center
		}

		100% {
			background-position: top left
		}
	}

	@-moz-keyframes hue {
		0% {
			background-position: right center
		}

		50% {
			background-position: center center
		}

		100% {
			background-position: top left
		}
	}

	@keyframes hue {
		0% {
			background-position: right center
		}

		50% {
			background-position: center center
		}

		100% {
			background-position: top left
		}
	}



	.button {
		-moz-appearance: none;
		-webkit-appearance: none;
		align-items: center;
		border: 1px solid transparent;
		border-radius: 4px;
		box-shadow: none;
		display: inline-flex;
		font-size: 1rem;
		height: 2.5em;
		justify-content: flex-start;
		line-height: 1.5;
		padding: 0 10px;
		margin: 5px;
		position: relative;
		vertical-align: top;
		transition: box-shadow .2s, color 450ms, background-color 300ms ease-in;
	}

	.subtitle {
		color: #526488;
		word-spacing: 5px;
	}

	.links {
		padding-top: 15px;
	}

	.button:hover {
		box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
		transition: box-shadow .2s, color 450ms, background-color 300ms ease-in;
	}

	.gh {
		border: 1px solid #1B1F23;
		color: #1B1F23;
	}

	.gh:hover {
		color: #fff;
		border: 1px solid #1B1F23;
		background-color: #1B1F23;
	}

	.tw {
		border: 1px solid #00acee;
		color: #00acee;
	}

	.tw:hover {
		color: #fff;
		background-color: #00acee;
		border: 1px solid #00acee;
	}

	.ascii {
		border: 1px solid #776DB2;
		color: #776DB2;
	}

	.ascii:hover {
		color: #fff;
		background-color: #776DB2;
		border: 1px solid #776DB2;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.footer {
		position: absolute;
		bottom: 0;
		padding: 16px;
		animation: 1s pull-in;
	}

	@keyframes pull-in {
		0% {
			transform: translateY(100px);
		}

		100% {
			transform: translateY(0px);
		}
	}

	.footer-link {
		text-decoration: none;
		cursor: pointer;
		border-bottom: 1px solid rgba(40, 54, 72, 0.2);
		color: #272727;
		transition: box-shadow .2s, color 450ms, padding .2s ease-out, background-color 300ms ease-in;
	}

	.footer-link:hover {
		padding: 16px 16px;
		color: #fff;
		background-color: #272727;
		border-bottom: 1px solid #0d5a9c;
		box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);
		transition: box-shadow .2s, color 450ms, padding .2s ease-out, background-color 300ms ease-in;
	}

	.typewriter p {
		padding: 0.25rem;
		font-size: 100%;
		overflow: hidden;
		border-right: .15em solid orange;
		white-space: nowrap;
		margin: 0 auto;
		letter-spacing: .15em;
		animation:
			typing 3.5s steps(40, end),
			blink-caret .75s step-end infinite;
	}

	@keyframes typing {
		from {
			width: 0
		}

		to {
			width: 100%
		}
	}

	@keyframes blink-caret {
		from,
		to {
			border-color: transparent
		}

		50% {
			border-color: orange;
		}
	}
</style>

<svelte:head>
	<title>Kotlin Hipster</title>
</svelte:head>

<section>
	<h1 class="title">
		KHipster
	</h1>
	<h2 class="subtitle">
		Full Stack Application with Kotlin
	</h2>

	<div class="typewriter">
		<p> npm i -g generator-jhipster-kotlin </p>
	</div>

	<div class="links">
		<a href="https://github.com/jhipster/jhipster-kotlin" target="_blank" text="GitHub" class="button gh"> GitHub
		</a>

		<a href="https://asciinema.org/a/dvESXUMGHqxCORGqpz1294kf6" target="_blank" class="button ascii"> Demo </a>

		<a href="https://twitter.com/kotlinhipster" target="_blank" class="button tw"> Twitter </a>
	</div>

	<div class="footer">
		created with &nbsp; <a class="footer-link" href="https://www.jhipster.tech">JHipster</a>
	</div>
</section>
