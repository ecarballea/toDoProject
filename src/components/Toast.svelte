<script>
    import { Toast } from "bootstrap";
    import { opt } from "../store";

    // to load Toast
    let toastTopRight;
    // $: console.log(toastTopRight);

    let instance;
    $: if (toastTopRight) {
        instance = new Toast(toastTopRight);
    }

    $: if ($opt.status) {
        instance.show();
    }

    // function toastShow(text, color) {
    //     opt = { text, color };
    //     instance.show();
    // }
</script>

<!-- the Toast container -->
<div class="toast-container position-absolute p-3 top-0 end-0">
    <!-- class="toast align-items-center text-white bg-{$opt.color} border-0" -->
    <div
        bind:this={toastTopRight}
        class="toast align-items-center text-white bg-{$opt.color} border-0"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
    >
        <div class="d-flex">
            <div class="toast-body">
                {$opt.text}
            </div>
            <button
                type="button"
                class="btn-close btn-close-white me-2 m-auto"
                data-bs-dismiss="toast"
                aria-label="Close"
            />
        </div>
    </div>
</div>
