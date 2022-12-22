function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"jumbotron\" style=\"background-color: #fff; height: calc(95vh);\">\r\n  <p>about works!</p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppChatboxChatboxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown mb-3 d-flex\">\r\n  <button class=\"btn btn-block btn-primary btn-dropdown dropdown-toggle font-weight-bold\"\r\n          type=\"button\"\r\n          id=\"dropdownMenuButton\"\r\n          data-toggle=\"dropdown\"\r\n          aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n    People\r\n  </button>\r\n  <!-- Change Name button -->\r\n  <button type=\"button\" class=\"btn btn-light\" data-toggle=\"modal\" data-target=\"#changeNameModal\">\r\n    <span type=\"button\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Change your name\">\r\n      <i class=\"fa fa-pencil fa-fw\" style=\"margin-right: 0px\"></i>\r\n    </span>\r\n  </button>\r\n\r\n  <!-- Drop down list of ppl-->\r\n  <div class=\"dropdown-menu\">\r\n    <a *ngFor=\"let nameColor of namesColors\" class=\"dropdown-item\">\r\n      <i class=\"fa fa-circle fa-fw\" [ngClass]=\"'color-' + nameColor.color\"></i>\r\n      {{ nameColor.name }}\r\n    </a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"chatBox card shadow-sm p-3 mb-5 bg-white rounded\">\r\n  <div class=\"mt-2\">\r\n    <div *ngFor=\"let mess of messages\">\r\n      <app-message-bubble [senderName]=\"mess.fromPeerId\"\r\n                          [content]=\"mess.content\">\r\n      </app-message-bubble>\r\n    </div>\r\n  </div>\r\n\r\n  <div>&nbsp;</div>\r\n\r\n  <!-- Emoji Picker-->\r\n  <div class=\"emoji-wrapper\">\r\n    <emoji-mart *ngIf=\"showEmojiPicker\"\r\n    set=\"messenger\"\r\n    [showPreview]=\"false\"\r\n    [emojiSize]=\"18\"\r\n    [perLine]=\"7\"\r\n    [totalFrequentLines]=\"1\"\r\n    height =\"150px\"\r\n    (emojiClick)=\"addEmoji($event)\"></emoji-mart>\r\n  </div>\r\n\r\n  <form class=\"ml-2 mr-1 mt-auto\"\r\n        [formGroup]=\"messageForm\"\r\n        (ngSubmit)=\"sendMessage(messageForm.value)\">\r\n    <div class=\"form-group d-flex\">\r\n      <!-- Input Box-->\r\n      <input type=\"text\"\r\n             formControlName=\"messageToSend\"\r\n             class=\"form-control\"\r\n             placeholder=\"Aa\"\r\n             autofocus />\r\n      <a class=\"btn btn-light\" (click)=\"toggleEmojiPicker()\">\r\n        <i class=\"fa fa-smile-o fa-lg\"></i>\r\n      </a>\r\n      <button *ngIf=\"messageToSend.value != ''\"\r\n              class=\"invisibleBtn\"\r\n              type=\"submit\">\r\n        <img class=\"ml-1\" src=\"../../assets/send-mail.svg\" />\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"changeNameModal\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\">New Name</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <input [(ngModel)]=\"myUsername\" type=\"text\" class=\"form-control\" placeholder=\"New name\" aria-label=\"New Username\">\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"submit\" class=\"btn btn-primary\" (click)=\"editName()\" data-dismiss=\"modal\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/code-editor/code-editor.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/code-editor/code-editor.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCodeEditorCodeEditorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Loading screen -->\r\n<div\r\n  *ngIf=\"!ready\"\r\n  class=\"d-flex mr-2 justify-content-around align-items-center loading\"\r\n  id=\"waiting-screen\"\r\n>\r\n  <div id=\"spinner-container\" class=\"text-center\">\r\n    <div class=\"spinner-grow text-primary mb-3\" role=\"status\"></div>\r\n    <br />\r\n    <h2>Loading...</h2>\r\n    <p>We're preparing an advanced coding environment for you.</p>\r\n  </div>\r\n  <img id=\"loading-img\" src=\"../../assets/loading.svg\" alt=\"loading\" />\r\n</div>\r\n\r\n<!-- Warning banner -->\r\n<div\r\n  *ngIf=\"ready\"\r\n  class=\"alert alert-warning alert-dismissible fade show text-center\"\r\n  role=\"alert\"\r\n>\r\n  <strong>Welcome to Code Spot! </strong>We are grateful to see you! Remember to\r\n  <strong> save your data before leaving. </strong>\r\n  After everyone leaves the room, the data will be erased forever.\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n\r\n<!-- Error banner -->\r\n<div\r\n  *ngIf=\"showErrorBanner\"\r\n  class=\"alert alert-danger alert-dismissible fade show text-center\"\r\n  role=\"alert\"\r\n>\r\n  <strong\r\n    >Your session has been disconnected! Anything you type will no longer sync. </strong\r\n  >Please create a new room!\r\n</div>\r\n\r\n<div #mainContainer class=\"d-flex ml-3 mr-2 flex-md-row flex-column mt-4\">\r\n  <form class=\"form-horizontal col-md-9 col-xs-12\" [formGroup]=\"editorForm\">\r\n    <div *ngIf=\"ready\" class=\"d-flex form-row\">\r\n      <!--Select Language-->\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-2 pl-0\">\r\n          <select\r\n            class=\"custom-select form-control\"\r\n            formControlName=\"language\"\r\n            (change)=\"onLanguageChange($event.target.value)\"\r\n          >\r\n            <option\r\n              *ngFor=\"let language of languages\"\r\n              [ngValue]=\"language.value\"\r\n            >\r\n              {{ language.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Select Theme-->\r\n      <div class=\"form-group\">\r\n        <div class=\"col-sm-2 pl-0\">\r\n          <select\r\n            class=\"custom-select form-control\"\r\n            formControlName=\"theme\"\r\n            (change)=\"onThemeChange($event.target.value)\"\r\n          >\r\n            <option *ngFor=\"let theme of themes\" [ngValue]=\"theme.value\">\r\n              {{ theme.name }}\r\n            </option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <!--Toggle Name Tag-->\r\n      <div\r\n        class=\"custom-control custom-switch form-group d-flex align-items-center\"\r\n      >\r\n        <input\r\n          type=\"checkbox\"\r\n          class=\"custom-control-input\"\r\n          id=\"tagNameSwitch\"\r\n          [(ngModel)]=\"showNameTags\"\r\n          (change)=\"toggleNameTag()\"\r\n          [ngModelOptions]=\"{ standalone: true }\"\r\n        />\r\n        <label class=\"custom-control-label\" for=\"tagNameSwitch\"\r\n          >Show name tags</label\r\n        >\r\n      </div>\r\n    </div>\r\n    <!-- Main Editor-->\r\n    <div>\r\n      <ngx-monaco-editor\r\n        [style.visibility]=\"ready ? 'visible' : 'hidden'\"\r\n        class=\"solution-code-editor\"\r\n        [options]=\"editorOptions\"\r\n        (onInit)=\"onInitEditorHandler($event)\"\r\n      ></ngx-monaco-editor>\r\n      <div class=\"btn-container d-flex\"\r\n           [style.visibility]=\"ready ? 'visible' : 'hidden'\">\r\n        <button class=\"btn btn-md btn-primary mt-2 mb-4 font-weight-bold\"\r\n                (click)=\"copyLink()\">\r\n          Get shareable link!\r\n        </button>\r\n        <button class=\"btn btn-md btn-primary mt-2 ml-2 mb-4 font-weight-bold\"\r\n                (click)=\"downloadFile()\">\r\n          Download file!\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- Aux Editor-->\r\n    <ngx-monaco-editor\r\n      id=\"aux-editor\"\r\n      class=\"solution-code-editor\"\r\n      [options]=\"editorOptions\"\r\n      (onInit)=\"onInitAuxEditorHandler($event)\"\r\n    >\r\n    </ngx-monaco-editor>\r\n  </form>\r\n\r\n  <!--Chat Box -->\r\n  <app-chatbox\r\n    [style.visibility]=\"ready ? 'visible' : 'hidden'\"\r\n    class=\"mt-5 ml-1\"\r\n  ></app-chatbox>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\r\n  <div class=\"card-deck justify-content-center mt-auto\">\r\n    <div class=\"card contact-card shadow-sm\">\r\n      <img class=\"card-img-top img-circle\" src=\"../../assets/Heidi.JPG\" />\r\n      <div class=\"card-body m-3\">\r\n        <h3>Heidi Tran</h3>\r\n        <h6 class=\"font-weight-light font-italic\">Software Engineer</h6>\r\n        <p class=\"card-text my-4 text-justify\">\r\n          Hi! I'm a rising third-year student at Drexel University. I'm\r\n          passionate about building software products and creating data\r\n          solutions. In my free time, I love trying out new recipes.\r\n        </p>\r\n        <div class=\"d-flex socials\">\r\n          <a\r\n            class=\"fa fa-lg fa-envelope icon\"\r\n            target=\"_blank\"\r\n            href=\"mailto:gtt27@drexel.edu\"\r\n          ></a>\r\n          <a\r\n            class=\"fa fa-lg fa-github-alt mx-2 icon\"\r\n            target=\"_blank\"\r\n            href=\"https://github.com/HeidiTran\"\r\n          ></a>\r\n          <a\r\n            class=\"fa fa-lg fa-linkedin icon\"\r\n            target=\"_blank\"\r\n            href=\"https://www.linkedin.com/in/heidi-tran/\"\r\n          ></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card contact-card shadow-sm\">\r\n      <img class=\"card-img-top img-circle\" src=\"../../assets/AnhMinh.jpg\" />\r\n      <div class=\"card-body m-3\">\r\n        <h3>Anh Minh Tran</h3>\r\n        <h6 class=\"font-weight-light font-italic\">Software Engineer</h6>\r\n        <p class=\"card-text my-4 text-justify\">\r\n          Hey guys, I'm a 3rd year student at Simon Fraser University. I have an immense\r\n          passion and enthusiasm for tackling difficult coding challenges. I\r\n          love CodeSpot because it is hard algorithmically.\r\n        </p>\r\n        <div class=\"d-flex socials\">\r\n          <a\r\n            class=\"fa fa-lg fa-envelope icon\"\r\n            target=\"_blank\"\r\n            href=\"mailto:atran33@mylangara.ca\"\r\n          ></a>\r\n          <a\r\n            class=\"fa fa-lg fa-github-alt mx-2 icon\"\r\n            target=\"_blank\"\r\n            href=\"https://github.com/anhminhtran235\"\r\n          ></a>\r\n          <a\r\n            class=\"fa fa-lg fa-linkedin icon\"\r\n            target=\"_blank\"\r\n            href=\"https://www.linkedin.com/in/anhminhtran/\"\r\n          ></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Feedback Form -->\r\n    <div class=\"card feedback-card shadow\">\r\n      <form\r\n        class=\"mt-auto mb-auto mx-5\"\r\n        [formGroup]=\"contactForm\"\r\n        (ngSubmit)=\"onSubmit(contactForm.value)\"\r\n      >\r\n        <h1 class=\"my-3\">{{ headerMessage }}</h1>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"name\"\r\n            class=\"form-control\"\r\n            placeholder=\"Your Name\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"email\"\r\n            class=\"form-control\"\r\n            placeholder=\"Your Email\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            formControlName=\"subject\"\r\n            class=\"form-control\"\r\n            placeholder=\"Subject\"\r\n          />\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <textarea\r\n            class=\"form-control\"\r\n            formControlName=\"message\"\r\n            rows=\"8\"\r\n            placeholder=\"Message\"\r\n          ></textarea>\r\n        </div>\r\n        <button type=\"submit\" class=\"btn btn-lg btn-primary mb-4\">\r\n          Send message\r\n        </button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFeedbackFeedbackComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"modal-dialog modal-lg modal-dialog-scrollable\" role=\"document\">\r\n  <div class=\"modal-content\">\r\n    <div class=\"modal-header\">\r\n      <h5 class=\"modal-title\">Feedback</h5>\r\n      <button\r\n        type=\"button\"\r\n        class=\"close\"\r\n        data-dismiss=\"modal\"\r\n        aria-label=\"Close\"\r\n      >\r\n        <span aria-hidden=\"true\">&times;</span>\r\n      </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n      <form\r\n        [formGroup]=\"feedbackForm\"\r\n        (ngSubmit)=\"onSubmit(feedbackForm.value)\"\r\n      >\r\n        <!-- Overal satisfaction -->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-form-label\"\r\n            >Your overall satisfaction of the app</label\r\n          >\r\n          <br />\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"100%\"\r\n              formControlName=\"satisfactionLevel\"\r\n              type=\"radio\"\r\n              id=\"satisfactionLevel\"\r\n              name=\"satisfactionLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"satisfactionLevel\"\r\n              >Extremely well</label\r\n            >\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"80%\"\r\n              formControlName=\"satisfactionLevel\"\r\n              type=\"radio\"\r\n              id=\"satisfactionLevel2\"\r\n              name=\"satisfactionLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"satisfactionLevel2\"\r\n              >Very well</label\r\n            >\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"60%\"\r\n              formControlName=\"satisfactionLevel\"\r\n              type=\"radio\"\r\n              id=\"satisfactionLevel3\"\r\n              name=\"satisfactionLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"satisfactionLevel3\"\r\n              >Somewhat well</label\r\n            >\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"40%\"\r\n              formControlName=\"satisfactionLevel\"\r\n              type=\"radio\"\r\n              id=\"satisfactionLevel4\"\r\n              name=\"satisfactionLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"satisfactionLevel4\"\r\n              >Not so well</label\r\n            >\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"20%\"\r\n              formControlName=\"satisfactionLevel\"\r\n              type=\"radio\"\r\n              id=\"satisfactionLevel5\"\r\n              name=\"satisfactionLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"satisfactionLevel5\"\r\n              >Not at all well</label\r\n            >\r\n          </div>\r\n        </div>\r\n        <!-- Collaborate -->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-form-label\"\r\n            >How satisfied are you with the ability to collaborate with others\r\n            using this app?</label\r\n          >\r\n          <br />\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"100%\"\r\n              formControlName=\"collabLevel\"\r\n              type=\"radio\"\r\n              id=\"collabLevel\"\r\n              name=\"collabLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"collabLevel\"\r\n              >Extremely well</label\r\n            >\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"80%\"\r\n              formControlName=\"collabLevel\"\r\n              type=\"radio\"\r\n              id=\"collabLevel2\"\r\n              name=\"collabLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"collabLevel2\"\r\n              >Very well</label\r\n            >\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"60%\"\r\n              formControlName=\"collabLevel\"\r\n              type=\"radio\"\r\n              id=\"collabLevel3\"\r\n              name=\"collabLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"collabLevel3\"\r\n              >Somewhat well</label\r\n            >\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"40%\"\r\n              formControlName=\"collabLevel\"\r\n              type=\"radio\"\r\n              id=\"collabLevel4\"\r\n              name=\"collabLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"collabLevel4\"\r\n              >Not so well</label\r\n            >\r\n          </div>\r\n          <div class=\"custom-control custom-radio custom-control-inline\">\r\n            <input\r\n              value=\"20%\"\r\n              formControlName=\"collabLevel\"\r\n              type=\"radio\"\r\n              id=\"collabLevel5\"\r\n              name=\"collabLevel\"\r\n              class=\"custom-control-input\"\r\n            />\r\n            <label class=\"custom-control-label\" for=\"collabLevel5\"\r\n              >Not at all well</label\r\n            >\r\n          </div>\r\n        </div>\r\n        <div class=\"d-flex flex-md-row flex-column\">\r\n          <!-- Did well -->\r\n          <div class=\"form-group col-sm-12 col-md-5 pl-0 mb-md-0\">\r\n            <label class=\"col-form-label\"\r\n              >What do you like most about the app?</label\r\n            >\r\n            <br />\r\n            <div class=\"custom-control custom-radio custom-control-inline\">\r\n              <input\r\n                value=\"0\"\r\n                formControlName=\"didWell\"\r\n                type=\"radio\"\r\n                id=\"didWell\"\r\n                name=\"didWell\"\r\n                class=\"custom-control-input\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"didWell\"\r\n                >Look and feel</label\r\n              >\r\n            </div>\r\n            <div class=\"custom-control custom-radio custom-control-inline\">\r\n              <input\r\n                value=\"1\"\r\n                formControlName=\"didWell\"\r\n                type=\"radio\"\r\n                id=\"didWell2\"\r\n                name=\"didWell\"\r\n                class=\"custom-control-input\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"didWell2\"\r\n                >Functionality</label\r\n              >\r\n            </div>\r\n            <div class=\"custom-control custom-radio custom-control-inline\">\r\n              <input\r\n                value=\"2\"\r\n                formControlName=\"didWell\"\r\n                type=\"radio\"\r\n                id=\"didWell3\"\r\n                name=\"didWell\"\r\n                class=\"custom-control-input\"\r\n              />\r\n              <label class=\"custom-control-label\" for=\"didWell3\"\r\n                >Convenience</label\r\n              >\r\n            </div>\r\n          </div>\r\n          <!-- Issue -->\r\n          <div class=\"form-group\">\r\n            <label class=\"col-form-label\">\r\n              What was your biggest problem during your experience?\r\n            </label>\r\n            <br />\r\n            <select class=\"custom-select\" formControlName=\"issue\">\r\n              <option value=\"0\">Nothing</option>\r\n              <option value=\"1\">The app was confusing to use</option>\r\n              <option value=\"2\">The app was missing features I needed</option>\r\n              <option value=\"3\">I experienced bugs</option>\r\n              <option value=\"4\">The app suddenly crashed</option>\r\n              <option value=\"5\">Other</option>\r\n            </select>\r\n          </div>\r\n        </div>\r\n        <!-- Issue in details -->\r\n        <div *ngIf=\"feedbackForm.value['issue'] !== 0\" class=\"form-group\">\r\n          <label class=\"col-form-label\"\r\n            >Please describe the problem you encountered in more detail</label\r\n          >\r\n          <textarea\r\n            class=\"form-control\"\r\n            formControlName=\"issueDetails\"\r\n            rows=\"1\"\r\n            placeholder=\"When I ...\"\r\n          ></textarea>\r\n        </div>\r\n        <!-- Suggestions -->\r\n        <div class=\"form-group\">\r\n          <label class=\"col-form-label\"\r\n            >Do you have any suggestions for improvement? (e.g. features you\r\n            want to see in the future)</label\r\n          >\r\n          <input\r\n            formControlName=\"improvement\"\r\n            placeholder=\"I want ...\"\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n          />\r\n        </div>\r\n      </form>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\r\n        Cancel\r\n      </button>\r\n      <button\r\n        type=\"submit\"\r\n        class=\"btn btn-primary\"\r\n        (click)=\"onSubmit(feedbackForm.value)\"\r\n        data-dismiss=\"modal\"\r\n      >\r\n        Submit\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <p class=\"text-center my-0 p-3\">\r\n      An open source project by Dinamo Team.\r\n      <a\r\n        class=\"fa fa-lg fa-github mx-2 icon\"\r\n        target=\"_blank\"\r\n        href=\"https://github.com/DinamoTeam\"\r\n      ></a>\r\n    </p>\r\n  </div>\r\n</footer>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom shadow-sm\"\r\n  >\r\n    <div class=\"container-fluid mx-5\">\r\n      <strong class=\"d-flex align-items-center\">\r\n        <img id=\"brandLogo\" src=\"../../assets/CodeSpotLogo.svg\" class=\"mr-2\" />\r\n        <a class=\"navbar-brand clickable\" (click)=\"goHome()\">Code Spot</a>\r\n      </strong>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow align-items-center\">\r\n          <!-- Home -->\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-secondary\" role=\"button\" (click)=\"goHome()\"\r\n              >Home</a\r\n            >\r\n          </li>\r\n          <!-- Feedback -->\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a\r\n              class=\"nav-link text-secondary\"\r\n              role=\"button\"\r\n              data-toggle=\"modal\"\r\n              data-target=\"#feedbackModal\"\r\n              (click)=\"onBtnFeedbackClick()\"\r\n              >Feedback</a\r\n            >\r\n          </li>\r\n          <!-- Contact -->\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a\r\n              class=\"nav-link text-secondary\"\r\n              role=\"button\"\r\n              (click)=\"onBtnContactClick()\"\r\n              >Contact</a\r\n            >\r\n          </li>\r\n          <!-- Create Room-->\r\n          <li *ngIf=\"showCreateNewRoomBtn\" class=\"nav-item\">\r\n            <button\r\n              class=\"btn btn-lg btn-primary\"\r\n              role=\"button\"\r\n              (click)=\"onBtnCreateNewRoomClick()\"\r\n            >\r\n              Create New Room &raquo;\r\n            </button>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<!-- Feedback form -->\r\n<div\r\n  class=\"modal fade\"\r\n  id=\"feedbackModal\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <app-feedback></app-feedback>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div role=\"main\" class=\"cover d-flex\">\r\n  <img src=\"../../assets/inSync.svg\" alt=\"laptop\" class=\"home-img order-md-2 order-sm-1\" />\r\n  <div class=\"container text-center order-md-1 order-sm-2\">\r\n    <h1 class=\"font-weight-bold\">Get started with Code Spot</h1>\r\n    <h3 class=\"font-weight-light\">\r\n      We help companies conduct technical interviews\r\n    </h3>\r\n    <div class=\"d-flex flex-column flex-md-row justify-content-center mt-5\">\r\n      <button class=\"btn btn-lg mr-md-3 btn-primary\"\r\n         role=\"button\"\r\n         routerlink=\"/editor\"\r\n         (click)=\"goToEditor()\">Create New Room &raquo;</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"features\">\r\n  <div class=\"d-flex feature flex-md-row flex-column\">\r\n    <img class=\"feature-img\" src=\"../../assets/googleDocs_.svg\" />\r\n    <div class=\"feature-text-left mt-5\">\r\n      <h1 class=\"feature-name mb-4\">Real-time Collaboration</h1>\r\n      <p class=\"feature-text\">\r\n        Conduct live interviews with the power of Visual Studio Code, the most popular code editor on the planet. Code Spot supports 60+ programming languages including C, C++, Java, Python, JavaScript, and many more. Plus, Code Spot supports an unlimited number of collaborators and 100% privacy! No account creation is needed.\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"d-flex feature flex-md-row flex-column\">\r\n    <div class=\"feature-text-right mt-5\">\r\n      <h1 class=\"feature-name mb-4\">Simple Messaging</h1>\r\n      <p class=\"feature-text\">\r\n        Code Spot boosts your interview experience with built-in messaging functionalities. Express more with hundreds of emoji included!\r\n      </p>\r\n    </div>\r\n    <img\r\n      class=\"feature-img\"\r\n      style=\"margin-left: auto;\"\r\n      src=\"../../assets/groupChat.svg\"\r\n    />\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/message-bubble/message-bubble.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message-bubble/message-bubble.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMessageBubbleMessageBubbleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div [ngClass]=\"{ 'justify-content-end': senderName == myPeerId }\"\r\n     class=\"d-flex\">\r\n  <div [ngClass]=\"{ 'align-items-end': senderName == myPeerId }\"\r\n       class=\"d-flex flex-column\">\r\n    <p class=\"name\">{{ this.nameService.getPeerName(this.senderName) }}</p>\r\n    <div [ngClass]=\"{\r\n        otherPplMessage: senderName != myPeerId,\r\n        myMessage: senderName == myPeerId\r\n      }\"\r\n         class=\"card mb-1\">\r\n      <div class=\"card-body\">\r\n        <p class=\"card-text\">{{ content }}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/about/about.component.css":
  /*!*******************************************!*\
    !*** ./src/app/about/about.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.css */
      "./src/app/about/about.component.css"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./code-editor/code-editor.component */
    "./src/app/code-editor/code-editor.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'editor',
      redirectTo: 'editor/new',
      pathMatch: 'full'
    }, {
      path: 'editor/:roomName',
      component: _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_5__["CodeEditorComponent"]
    }, {
      path: 'About',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
    }, {
      path: 'Contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_room_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/room.service */
    "./src/app/services/room.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(roomService) {
        _classCallCheck(this, AppComponent);

        this.roomService = roomService;
        this.title = 'code-spot-client';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.roomService.connectServer().subscribe(function (data) {});
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_room_service__WEBPACK_IMPORTED_MODULE_2__["RoomService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: onMonacoLoad, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "onMonacoLoad", function () {
      return onMonacoLoad;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-monaco-editor */
    "./node_modules/ngx-monaco-editor/fesm2015/ngx-monaco-editor.js");
    /* harmony import */


    var _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ctrl/ngx-emoji-mart */
    "./node_modules/@ctrl/ngx-emoji-mart/fesm2015/ctrl-ngx-emoji-mart.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./code-editor/code-editor.component */
    "./src/app/code-editor/code-editor.component.ts");
    /* harmony import */


    var _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./chatbox/chatbox.component */
    "./src/app/chatbox/chatbox.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./message-bubble/message-bubble.component */
    "./src/app/message-bubble/message-bubble.component.ts");
    /* harmony import */


    var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./feedback/feedback.component */
    "./src/app/feedback/feedback.component.ts");

    var monacoConfig = {
      defaultOptions: {
        wordWrap: 'on',
        showUnused: true,
        tabCompletion: 'onlySnippets'
      },
      onMonacoLoad: onMonacoLoad
    };

    function onMonacoLoad() {
      /* Change Config here */
    }

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_11__["FooterComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"], _code_editor_code_editor_component__WEBPACK_IMPORTED_MODULE_13__["CodeEditorComponent"], _chatbox_chatbox_component__WEBPACK_IMPORTED_MODULE_14__["ChatboxComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"], _message_bubble_message_bubble_component__WEBPACK_IMPORTED_MODULE_17__["MessageBubbleComponent"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_18__["FeedbackComponent"]],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_7__["MonacoEditorModule"].forRoot(monacoConfig), _ctrl_ngx_emoji_mart__WEBPACK_IMPORTED_MODULE_8__["PickerModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/chatbox/chatbox.component.css":
  /*!***********************************************!*\
    !*** ./src/app/chatbox/chatbox.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppChatboxChatboxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\r\n  height: 25px;\r\n  width: 25px;\r\n  margin-top: 4px;\r\n  color: #ff0000;\r\n}\r\n\r\n.invisibleBtn {\r\n  border: initial;\r\n  background-color: initial;\r\n  outline: none;\r\n}\r\n\r\n.chatBox {\r\n  width: 90vw;\r\n  height: 50vh;\r\n  overflow-y: auto;\r\n  position: relative !important;\r\n}\r\n\r\n.dropdown-menu {\r\n  width: 100%;\r\n}\r\n\r\n.dropdown-item {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.btn-dropdown {\r\n  width: 100%;\r\n}\r\n\r\n.fa-fw {\r\n  font-size: 15px;\r\n  margin-right: 0.5rem;\r\n}\r\n\r\n.emoji-wrapper {\r\n  height: 100%;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.emoji-wrapper emoji-mart {\r\n  position: absolute;\r\n  right: 38px;\r\n  bottom: 0px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  .chatBox {\r\n    width: 23vw;\r\n    height: 67vh;\r\n    overflow-y: auto;\r\n  }\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 5px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background: #f1f1f1;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: #999;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: #777;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdGJveC9jaGF0Ym94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLFVBQVU7QUFDWjs7QUFFQSxVQUFVOztBQUNWO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBLFdBQVc7O0FBQ1g7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsb0JBQW9COztBQUNwQjtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NoYXRib3gvY2hhdGJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogNHB4O1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcblxyXG4uaW52aXNpYmxlQnRuIHtcclxuICBib3JkZXI6IGluaXRpYWw7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4uY2hhdEJveCB7XHJcbiAgd2lkdGg6IDkwdnc7XHJcbiAgaGVpZ2h0OiA1MHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJ0bi1kcm9wZG93biB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5mYS1mdyB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG59XHJcblxyXG4uZW1vamktd3JhcHBlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmVtb2ppLXdyYXBwZXIgZW1vamktbWFydCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAzOHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAuY2hhdEJveCB7XHJcbiAgICB3aWR0aDogMjN2dztcclxuICAgIGhlaWdodDogNjd2aDtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG4vKiB3aWR0aCAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogNXB4O1xyXG59XHJcblxyXG4vKiBUcmFjayAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG59XHJcblxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogIzk5OTtcclxufVxyXG5cclxuLyogSGFuZGxlIG9uIGhvdmVyICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM3Nzc7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/chatbox/chatbox.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/chatbox/chatbox.component.ts ***!
    \**********************************************/

  /*! exports provided: ChatboxComponent */

  /***/
  function srcAppChatboxChatboxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatboxComponent", function () {
      return ChatboxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_peer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/peer.service */
    "./src/app/services/peer.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/Utils */
    "./src/app/shared/Utils.ts");
    /* harmony import */


    var _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/AlertType */
    "./src/app/shared/AlertType.ts");

    var ChatboxComponent = /*#__PURE__*/function () {
      function ChatboxComponent(peerService, ngZone, formBuilder) {
        _classCallCheck(this, ChatboxComponent);

        this.peerService = peerService;
        this.ngZone = ngZone;
        this.formBuilder = formBuilder;
        this.messages = [];
        this.namesColors = [];
        this.showEmojiPicker = false;
        this.myUsername = '';
        this.MAX_USERNAME_LEN = 20;
      }

      _createClass(ChatboxComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subscribeToPeerServerEvents();
          this.messageToSend = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('');
          this.messageForm = this.formBuilder.group({
            messageToSend: this.messageToSend
          });
        }
      }, {
        key: "toggleEmojiPicker",
        value: function toggleEmojiPicker() {
          this.showEmojiPicker = !this.showEmojiPicker;
        }
      }, {
        key: "addEmoji",
        value: function addEmoji(event) {
          this.messageToSend.patchValue(this.messageToSend.value + event.emoji["native"]);
        }
      }, {
        key: "editName",
        value: function editName() {
          if (this.myUsername === '') {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].alert('Blank name is not allowed!', _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error);

            return;
          } else if (this.myUsername.length > this.MAX_USERNAME_LEN) {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].alert('Username\'s length must be smaller than ' + this.MAX_USERNAME_LEN + '!', _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error);

            return;
          }

          var newName = this.myUsername;
          this.peerService.changeMyName(newName);
          this.namesColors = this.peerService.getNameColorList();
          this.peerService.broadcastChangeName(newName);

          _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].alert('Your name has been changed to ' + newName, _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Success);
        }
      }, {
        key: "subscribeToPeerServerEvents",
        value: function subscribeToPeerServerEvents() {
          var _this = this;

          _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["PeerUtils"].announce.subscribe(function (message) {
            _this.ngZone.run(function () {
              switch (message) {
                case 0
                /* UpdateChatMessages */
                :
                  _this.messages = _this.peerService.getAllMessages();
                  break;

                case 10
                /* NewPeerJoining */
                :
                  _this.myUsername = _this.peerService.getMyName();

                case 13
                /* ChangePeerName */
                :
                case 9
                /* PeerLeft */
                :
                  _this.namesColors = _this.peerService.getNameColorList();
                  break;

                default:
              }
            });
          });
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(form) {
          this.peerService.sendMessage(this.messageToSend.value);
          this.messages = this.peerService.getAllMessages();
          this.messageForm.setValue({
            messageToSend: ''
          });
          this.showEmojiPicker = false;
        }
      }]);

      return ChatboxComponent;
    }();

    ChatboxComponent.ctorParameters = function () {
      return [{
        type: _services_peer_service__WEBPACK_IMPORTED_MODULE_2__["PeerService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messagebox', {
      "static": false
    })], ChatboxComponent.prototype, "messagebox", void 0);
    ChatboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chatbox',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chatbox.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/chatbox/chatbox.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chatbox.component.css */
      "./src/app/chatbox/chatbox.component.css"))["default"]]
    })], ChatboxComponent);
    /***/
  },

  /***/
  "./src/app/code-editor/code-editor.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/code-editor/code-editor.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCodeEditorCodeEditorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-control {\r\n  width: initial;\r\n}\r\n\r\n.solution-code-editor {\r\n  height: 75vh;\r\n}\r\n\r\n#spinner-container {\r\n  margin-left: 50px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .form-row {\r\n    justify-content: center;\r\n  }\r\n\r\n  .btn-container {\r\n    justify-content: center;\r\n  }\r\n\r\n  #loading-img {\r\n      display: none;\r\n  }\r\n\r\n  #spinner-container {\r\n      margin-left: 0px;\r\n  }\r\n\r\n  .alert {\r\n      font-size: 13px;\r\n  }\r\n}\r\n\r\n.spinner-grow {\r\n  width: 4rem;\r\n  height: 4rem;\r\n}\r\n\r\n#mainContainer {\r\n  z-index: 0;\r\n}\r\n\r\n#aux-editor {\r\n  display: none;\r\n}\r\n\r\n#loading-img {\r\n  z-index: 2;\r\n  height: 90%;\r\n}\r\n\r\n#waiting-screen {\r\n  z-index: 1;\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 90%;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZS1lZGl0b3IvY29kZS1lZGl0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtNQUNJLGFBQWE7RUFDakI7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEI7O0VBRUE7TUFDSSxlQUFlO0VBQ25CO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvZGUtZWRpdG9yL2NvZGUtZWRpdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogaW5pdGlhbDtcclxufVxyXG5cclxuLnNvbHV0aW9uLWNvZGUtZWRpdG9yIHtcclxuICBoZWlnaHQ6IDc1dmg7XHJcbn1cclxuXHJcbiNzcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb3JtLXJvdyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5idG4tY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgI2xvYWRpbmctaW1nIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gICNzcGlubmVyLWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYWxlcnQge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc3Bpbm5lci1ncm93IHtcclxuICB3aWR0aDogNHJlbTtcclxuICBoZWlnaHQ6IDRyZW07XHJcbn1cclxuXHJcbiNtYWluQ29udGFpbmVyIHtcclxuICB6LWluZGV4OiAwO1xyXG59XHJcblxyXG4jYXV4LWVkaXRvciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuI2xvYWRpbmctaW1nIHtcclxuICB6LWluZGV4OiAyO1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4jd2FpdGluZy1zY3JlZW4ge1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/code-editor/code-editor.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/code-editor/code-editor.component.ts ***!
    \******************************************************/

  /*! exports provided: CodeEditorComponent */

  /***/
  function srcAppCodeEditorCodeEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CodeEditorComponent", function () {
      return CodeEditorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/editor.service */
    "./src/app/services/editor.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_peer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/peer.service */
    "./src/app/services/peer.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_Languages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/Languages */
    "./src/app/shared/Languages.ts");
    /* harmony import */


    var _services_cursor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/cursor.service */
    "./src/app/services/cursor.service.ts");
    /* harmony import */


    var _shared_Utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/Utils */
    "./src/app/shared/Utils.ts");
    /* harmony import */


    var _shared_AlertType__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/AlertType */
    "./src/app/shared/AlertType.ts");

    var CodeEditorComponent = /*#__PURE__*/function () {
      function CodeEditorComponent(peerService, cursorService, editorService, ngZone, actRoute, location) {
        _classCallCheck(this, CodeEditorComponent);

        this.peerService = peerService;
        this.cursorService = cursorService;
        this.editorService = editorService;
        this.ngZone = ngZone;
        this.actRoute = actRoute;
        this.location = location;
        this.showNameTags = true;
        this.showErrorBanner = false;
        this.ready = false;
        this.mainEditorReady = false;
        this.auxEditorReady = false;
        this.peerServiceHasConnectedToPeerServer = false;
        this.languages = _shared_Languages__WEBPACK_IMPORTED_MODULE_7__["Languages"];
        this.themes = [{
          name: 'Visual Studio Dark',
          value: 'vs-dark'
        }, {
          name: 'Visual Studio Light',
          value: 'vs'
        }, {
          name: 'High Contrast Dark',
          value: 'hc-black'
        }];
        this.editorForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          language: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](_services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].currentLanguage, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          theme: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('vs-dark', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.editorOptions = {
          theme: 'vs-dark',
          language: _services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].currentLanguage,
          wordWrap: 'on',
          trimAutoWhitespace: false
        };
        this.subscribeToPeerServiceEvents();
        this.getRoomName();
      }

      _createClass(CodeEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.selectedLang = _services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].currentLanguage;
          this.selectedTheme = 'vs-dark';
        }
      }, {
        key: "onLanguageChange",
        value: function onLanguageChange(res) {
          this.selectedLang = res.slice(res.indexOf(':') + 2);
          monaco.editor.setModelLanguage(this.editorTextModel, this.selectedLang);
          _services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].currentLanguage = this.selectedLang;
          this.peerService.broadcastChangeLanguage();

          _shared_Utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].alert('Language has been changed to ' + _shared_Utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].getLanguageName(_services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].currentLanguage), _shared_AlertType__WEBPACK_IMPORTED_MODULE_10__["AlertType"].Message);
        }
      }, {
        key: "onThemeChange",
        value: function onThemeChange(res) {
          this.selectedTheme = res.slice(res.indexOf(':') + 2);
          monaco.editor.setTheme(this.selectedTheme);
        }
      }, {
        key: "toggleNameTag",
        value: function toggleNameTag() {
          if (this.showNameTags) this.cursorService.showAllNameTags();else this.cursorService.hideAllNameTags();
        }
      }, {
        key: "onInitEditorHandler",
        value: function onInitEditorHandler(event) {
          var _this2 = this;

          this.editor = event;
          this.editorTextModel = this.editor.getModel();
          this.editorTextModel.setEOL(0); // Set EOL from '\r\n' -> '\n'
          // Disable Ctrl-D (tricky to sync cursor + select)

          this.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_D, function () {}); // Add "padding" to the top

          var viewZoneId;
          this.editor.changeViewZones(function (changeAccessor) {
            var domNode = document.createElement('div');
            viewZoneId = changeAccessor.addZone({
              afterLineNumber: 0,
              heightInLines: 1.5,
              domNode: domNode
            });
          }); // Listen to any content changes (such as insert, remove, undo,...)

          this.editor.onDidChangeModelContent(function (e) {
            return _this2.onDidChangeModelContentHandler(e);
          }); // Listen to cursor position change

          this.editor.onDidChangeCursorPosition(function (e) {
            return _this2.onDidChangeCursorPositionHandler(e);
          }); // Listen to cursor selection change

          this.editor.onDidChangeCursorSelection(function (e) {
            return _this2.onDidChangeCursorSelectionHandler(e);
          }); // Only connect to PeerServer when both Monaco Editors is ready

          this.mainEditorReady = true;

          if (this.auxEditorReady && !this.peerServiceHasConnectedToPeerServer) {
            this.peerService.connectToPeerServerAndInit();
            this.peerServiceHasConnectedToPeerServer = true;
          }
        }
        /**
         * Aux editor will always be '1 step behind' main editor. This is useful because
         * to correctly sync undo / redo request and cursor / select change request,
         * we need 'currentState' and 'previousState' of our editor
         */

      }, {
        key: "onInitAuxEditorHandler",
        value: function onInitAuxEditorHandler(event) {
          this.auxEditor = event;
          this.auxEditorTextModel = this.auxEditor.getModel();
          this.auxEditorTextModel.setEOL(0); // Set EOL from '\r\n' -> '\n'
          // Only connect to PeerServer when both Monaco Editors is ready

          this.auxEditorReady = true;

          if (this.mainEditorReady && !this.peerServiceHasConnectedToPeerServer) {
            this.peerService.connectToPeerServerAndInit();
            this.peerServiceHasConnectedToPeerServer = true;
          }
        }
        /**
         * Listen to any content changes (such as insert, remove, undo,...)
         */

      }, {
        key: "onDidChangeModelContentHandler",
        value: function onDidChangeModelContentHandler(event) {
          // remoteOpLeft is used because remoteInsert / remoteRemove will also trigger this event
          if (_services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].remoteOpLeft > 0) {
            _services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].remoteOpLeft--;
            return;
          }

          var changes = event.changes;

          for (var i = 0; i < changes.length; i++) {
            var range = changes[i].range; // Calculate new pos for nameTag when local remove. Notice we use auxEditor

            var index = this.editorService.posToIndex(this.auxEditorTextModel, range.startLineNumber, range.startColumn);
            this.cursorService.recalculateAllNameTagAndCursorIndicesAfterRemove(index, changes[i].rangeLength); // Handle local remove (if any)

            this.editorService.handleLocalRemove(this.auxEditor, range.startLineNumber, range.startColumn, range.endLineNumber, range.endColumn, changes[i].rangeLength); // Calculate new pos for nameTag when local insert. Notice we use auxEditor

            index = this.editorService.posToIndex(this.auxEditorTextModel, range.startLineNumber, range.startColumn);
            this.cursorService.recalculateAllNameTagAndCursorIndicesAfterInsert(index, changes[i].text.length, this.peerService.getMyPeerId()); // Handle local insert (if any)

            this.editorService.handleLocalInsert(this.auxEditor, changes[i].text, range.startLineNumber, range.startColumn);
          } // Redraw name tag


          this.cursorService.redrawPeersNameTagsAndCursors(this.editor);
        }
        /**
         * Listen to cursor position change event
         */

      }, {
        key: "onDidChangeCursorPositionHandler",
        value: function onDidChangeCursorPositionHandler(event) {
          this.cursorService.setMyLastCursorEvent(event); // Draw our name tag wherever our cursor goes

          this.cursorService.drawNameTag(this.editor, this.peerService.getMyPeerId(), event.position.lineNumber, event.position.column, true);
          this.peerService.broadcastChangeCursorPos(event);
        }
        /**
         * Listen to cursor selection change event
         */

      }, {
        key: "onDidChangeCursorSelectionHandler",
        value: function onDidChangeCursorSelectionHandler(event) {
          this.cursorService.setMyLastSelectEvent(event);
          this.peerService.broadcastChangeSelectionPos(event);
        }
      }, {
        key: "subscribeToPeerServiceEvents",
        value: function subscribeToPeerServiceEvents() {
          var _this3 = this;

          _shared_Utils__WEBPACK_IMPORTED_MODULE_9__["PeerUtils"].announce.subscribe(function (message) {
            _this3.ngZone.run(function () {
              switch (message) {
                case 2
                /* RemoteInsert */
                :
                case 4
                /* RemoteAllMessages */
                :
                  _this3.editorService.handleRemoteInsert(_this3.editor, _this3.auxEditor, _this3.peerService.getReceivedRemoteCrdts(), _this3.peerService.getPeerIdWhoSentCrdts());

                  break;

                case 3
                /* RemoteRemove */
                :
                  _this3.editorService.handleRemoteRemove(_this3.editor, _this3.auxEditor, _this3.peerService.getReceivedRemoteCrdts());

                  break;

                case 1
                /* RoomName */
                :
                  _this3.roomName = _this3.peerService.getRoomName();

                  _this3.location.replaceState('/editor/' + _this3.roomName);

                  break;

                case 5
                /* ChangeLanguage */
                :
                  _this3.selectedLang = _services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].currentLanguage;
                  monaco.editor.setModelLanguage(_this3.editorTextModel, _this3.selectedLang);

                  _this3.editorForm.patchValue({
                    language: _this3.selectedLang
                  });

                  break;

                case 6
                /* ReadyToDisplayMonaco */
                :
                  _this3.ready = true;
                  break;

                /**
                 * Sync cursor, name tag and selection.
                 *
                 * To sync the 3 things above, we have 3 options. The first 2 don't work, the last one works quite well:
                 *
                 * 1/ Send all change events and update when receive those events: NOT GOOD because if 2 peers are far apart,
                 * there will be a noticeable delay
                 * 2/ Update based on our own calculation after each insertion, deletion and with the help of Monaco decoration: NOT GOOD
                 * because if the other peer click somewhere, how can we calculate that?
                 * => Maybe we can combine the best of both worlds? YES we can, with some 'tricks'.
                 * - We CANNOT send all change events, execute them all and also update based on our calculation. The cursor will go crazy
                 * - Adding some logic such as only send 'important' events such as mouse click is NOT enough (There are edge cases)
                 *
                 * Here's what we CAN do (and this is what we're doing right now):
                 * 3/ - Send ALL events to make sure the cursor, nametag and selection will EVENTUALLY be correct (after 2-3 seconds idle)
                 * - Then during those 2-3 seconds when cursors,... are possibly not in sync, use our calculation + monaco to make it
                 * correct AS MUCH AS POSSIBLE
                 * - Also we will NOT use MOST change events received. We only use the 'most recent' one if
                 * it has been 500 milliseconds and the cursor doesn't move
                 * - Finally, for important events such as mouse click, user explicitly move cursor by keyboard arrow and
                 * tricky-to-calculate events such as undo, redo, some Monaco shortcuts, we execute as soon as we receive them
                 */

                case 7
                /* CursorChange */
                :
                  var cursorChangeInfo = _this3.peerService.getCursorChangeInfo();

                  _this3.cursorService.setPeerMostRecentCursorChange(cursorChangeInfo.peerId, cursorChangeInfo);

                  if (_services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].isCursorOrSelectEventImportant(cursorChangeInfo)) {
                    // Apply change right now
                    _this3.updateCursorAndNameTag(cursorChangeInfo);
                  } else {
                    // Decide after ... milliseconds
                    _this3.useEventToUpdateCursorAndNameTagIfNoMoreChangesAfter(500, cursorChangeInfo, cursorChangeInfo.peerId);
                  }

                  break;

                case 8
                /* SelectionChange */
                :
                  var selectionChangeInfo = _this3.peerService.getSelectionChangeInfo();

                  _this3.cursorService.setPeerMostRecentSelectEvent(selectionChangeInfo.peerId, selectionChangeInfo);

                  if (_services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].isCursorOrSelectEventImportant(selectionChangeInfo)) {
                    // Apply change right now
                    _this3.updateSelection(selectionChangeInfo);
                  } else {
                    // Decide after ... milliseconds
                    _this3.useEventToUpdateSelectIfNoMoreChangesAfter(500, selectionChangeInfo, selectionChangeInfo.peerId);
                  }

                  break;

                case 9
                /* PeerLeft */
                :
                  var peerIdLeft = _this3.peerService.getPeerIdJustLeft();

                  _this3.cursorService.removePeer(_this3.editor, peerIdLeft);

                  break;

                case 13
                /* ChangePeerName */
                :
                  _this3.cursorService.redrawPeersNameTagsAndCursors(_this3.editor);

                  break;

                case 14
                /* ChangeMyName */
                :
                  _this3.cursorService.redrawMyNameTag(_this3.editor, _this3.peerService.getMyPeerId());

                  break;

                case 15
                /* UnhandledError */
                :
                  _this3.showErrorBanner = true;

                default:
                  break;
              }
            });
          });
        }
      }, {
        key: "useEventToUpdateCursorAndNameTagIfNoMoreChangesAfter",
        value: function useEventToUpdateCursorAndNameTagIfNoMoreChangesAfter(milliseconds, cursorChangeEvent, peerId) {
          var that = this;
          setTimeout(function () {
            var isEventMostRecent = that.cursorService.getPeerMostRecentCursorEvent(peerId) === cursorChangeEvent;

            if (isEventMostRecent) {
              that.updateCursorAndNameTag(cursorChangeEvent);
            }
          }, milliseconds);
        }
      }, {
        key: "useEventToUpdateSelectIfNoMoreChangesAfter",
        value: function useEventToUpdateSelectIfNoMoreChangesAfter(milliseconds, selectChangeEvent, peerId) {
          var that = this;
          setTimeout(function () {
            var isEventMostRecent = that.cursorService.getPeerMostRecentSelectEvent(peerId) === selectChangeEvent;

            if (isEventMostRecent) {
              that.updateSelection(selectChangeEvent);
            }
          }, milliseconds);
        }
      }, {
        key: "updateCursorAndNameTag",
        value: function updateCursorAndNameTag(cursorChangeEvent) {
          this.cursorService.drawCursor(this.editor, cursorChangeEvent.peerId, cursorChangeEvent.line, cursorChangeEvent.col);
          this.cursorService.drawNameTag(this.editor, cursorChangeEvent.peerId, cursorChangeEvent.line, cursorChangeEvent.col, false);
        }
      }, {
        key: "updateSelection",
        value: function updateSelection(selectionChangeEvent) {
          this.cursorService.drawSelection(this.editor, selectionChangeEvent.startLine, selectionChangeEvent.startColumn, selectionChangeEvent.endLine, selectionChangeEvent.endColumn, selectionChangeEvent.peerId);
        }
      }, {
        key: "getRoomName",
        value: function getRoomName() {
          var _this4 = this;

          this.peerService.connectionEstablished.subscribe(function (successful) {
            if (successful) {
              _this4.roomName = _this4.actRoute.snapshot.params['roomName'];
              if (_this4.roomName === 'new') _this4.peerService.createNewRoom();else _this4.peerService.joinExistingRoom(_this4.roomName);
            }
          });
        }
      }, {
        key: "copyLink",
        value: function copyLink() {
          var selBox = document.createElement('textarea');
          selBox.style.position = 'fixed';
          selBox.style.left = '0';
          selBox.style.top = '0';
          selBox.style.opacity = '0';
          selBox.value = window.location.protocol + '//' + window.location.hostname + '/editor/' + this.roomName;
          document.body.appendChild(selBox);
          selBox.focus();
          selBox.select();
          document.execCommand('copy');
          document.body.removeChild(selBox);

          _shared_Utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].alert('Link copied to clipboard!', _shared_AlertType__WEBPACK_IMPORTED_MODULE_10__["AlertType"].Success);
        }
      }, {
        key: "downloadFile",
        value: function downloadFile() {
          var text = this.editorService.getEditorContent(this.editor);
          var elem = document.createElement('a');

          var fileName = 'codeSpot' + _shared_Utils__WEBPACK_IMPORTED_MODULE_9__["Utils"].getLanguageExt(_services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].currentLanguage);

          elem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
          elem.setAttribute('download', fileName);
          elem.style.display = 'none';
          document.body.appendChild(elem);
          elem.click();
          document.body.removeChild(elem);
        }
      }, {
        key: "printBST",
        value: function printBST() {
          console.log(this.editorService.bst.inorderToString());
        }
      }]);

      return CodeEditorComponent;
    }();

    CodeEditorComponent.ctorParameters = function () {
      return [{
        type: _services_peer_service__WEBPACK_IMPORTED_MODULE_5__["PeerService"]
      }, {
        type: _services_cursor_service__WEBPACK_IMPORTED_MODULE_8__["CursorService"]
      }, {
        type: _services_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CodeEditorComponent.prototype, "languages", void 0);
    CodeEditorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-code-editor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./code-editor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/code-editor/code-editor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./code-editor.component.css */
      "./src/app/code-editor/code-editor.component.css"))["default"]]
    })], CodeEditorComponent);
    /***/
  },

  /***/
  "./src/app/contact/contact.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contact/contact.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactContactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\r\n  min-height: 84vh;\r\n}\r\n\r\n.img-circle {\r\n  width: 15rem;\r\n  margin: 0 auto;\r\n  margin-top: 1.5rem;\r\n  border-radius: 50%;\r\n}\r\n\r\n.icon {\r\n  color: #777777;\r\n}\r\n\r\n.socials {\r\n  margin-top: auto;\r\n}\r\n\r\n.card-deck {\r\n  flex: initial;\r\n}\r\n\r\n.card {\r\n  border-radius: 20px;\r\n}\r\n\r\n.contact-card {\r\n  margin: 11px 10px;\r\n  width: 20rem;\r\n  flex: initial;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .card-deck {\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n\r\n  .contact-card {\r\n    margin: 30px auto;\r\n    width: 20rem;\r\n  }\r\n\r\n  .feedback-card {\r\n    margin: 30px auto;\r\n  }\r\n\r\n  form {\r\n    width: 18rem;\r\n  }\r\n\r\n  card {\r\n    width: 20rem;\r\n  }\r\n}\r\n\r\n.feedback-card {\r\n  margin: 11px 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDg0dmg7XHJcbn1cclxuXHJcbi5pbWctY2lyY2xlIHtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIGNvbG9yOiAjNzc3Nzc3O1xyXG59XHJcblxyXG4uc29jaWFscyB7XHJcbiAgbWFyZ2luLXRvcDogYXV0bztcclxufVxyXG5cclxuLmNhcmQtZGVjayB7XHJcbiAgZmxleDogaW5pdGlhbDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWNhcmQge1xyXG4gIG1hcmdpbjogMTFweCAxMHB4O1xyXG4gIHdpZHRoOiAyMHJlbTtcclxuICBmbGV4OiBpbml0aWFsO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgLmNhcmQtZGVjayB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5jb250YWN0LWNhcmQge1xyXG4gICAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgfVxyXG5cclxuICAuZmVlZGJhY2stY2FyZCB7XHJcbiAgICBtYXJnaW46IDMwcHggYXV0bztcclxuICB9XHJcblxyXG4gIGZvcm0ge1xyXG4gICAgd2lkdGg6IDE4cmVtO1xyXG4gIH1cclxuXHJcbiAgY2FyZCB7XHJcbiAgICB3aWR0aDogMjByZW07XHJcbiAgfVxyXG59XHJcblxyXG4uZmVlZGJhY2stY2FyZCB7XHJcbiAgbWFyZ2luOiAxMXB4IDEwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/utils.service */
    "./src/app/services/utils.service.ts");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent(formBuilder, utilsService) {
        _classCallCheck(this, ContactComponent);

        this.formBuilder = formBuilder;
        this.utilsService = utilsService;
        this.contactForm = this.formBuilder.group({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.headerMessage = 'Talk to us!';
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          this.contactForm.reset();

          if (form['message'] != '') {
            this.utilsService.sendEmail(form);
          }
        }
      }]);

      return ContactComponent;
    }();

    ContactComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
      }];
    };

    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contact.component.css */
      "./src/app/contact/contact.component.css"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/feedback/feedback.component.css":
  /*!*************************************************!*\
    !*** ./src/app/feedback/feedback.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFeedbackFeedbackComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".col-form-label {\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .form-group {\r\n    margin-bottom: 0px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbC1mb3JtLWxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/feedback/feedback.component.ts":
  /*!************************************************!*\
    !*** ./src/app/feedback/feedback.component.ts ***!
    \************************************************/

  /*! exports provided: FeedbackComponent */

  /***/
  function srcAppFeedbackFeedbackComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function () {
      return FeedbackComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_utils_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/utils.service */
    "./src/app/services/utils.service.ts");

    var FeedbackComponent = /*#__PURE__*/function () {
      function FeedbackComponent(formBuilder, utilService) {
        _classCallCheck(this, FeedbackComponent);

        this.formBuilder = formBuilder;
        this.utilService = utilService;
        this.didWellMap = {
          0: 'Look and feel',
          1: 'Functionality',
          2: 'Convenience'
        };
        this.issuesMap = {
          0: 'Nothing',
          1: 'The app was confusing to use',
          2: 'The app was missing features I needed',
          3: 'I experienced bugs',
          4: 'The app suddenly crashed',
          5: 'Other'
        };
        this.feedbackForm = this.formBuilder.group({
          satisfactionLevel: '100%',
          collabLevel: '100%',
          didWell: '0',
          issue: 0,
          issueDetails: '',
          improvement: ''
        });
      }

      _createClass(FeedbackComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit(form) {
          this.feedbackForm.value['didWell'] = this.didWellMap[this.feedbackForm.value['didWell']];
          this.feedbackForm.value['issue'] = this.issuesMap[this.feedbackForm.value['issue']];
          this.utilService.sendFeedbackForm(form);
        }
      }]);

      return FeedbackComponent;
    }();

    FeedbackComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _services_utils_service__WEBPACK_IMPORTED_MODULE_3__["UtilsService"]
      }];
    };

    FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-feedback',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./feedback.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/feedback/feedback.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./feedback.component.css */
      "./src/app/feedback/feedback.component.css"))["default"]]
    })], FeedbackComponent);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\r\n  color: white;\r\n  background-color: #222b37;\r\n}\r\n\r\na {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjIyYjM3O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "html {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.nav-link {\r\n  font-size: 18px;\r\n}\r\n\r\n.nav-item {\r\n  padding: 2px;\r\n  margin-left: 7px;\r\n}\r\n\r\n.clickable {\r\n  cursor: pointer;\r\n}\r\n\r\n.btn-primary {\r\n  margin-left: 5px;\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .container-fluid {\r\n    margin-left: 0px !important;\r\n    margin-right: 0px !important;\r\n  }\r\n}\r\n\r\n#brandLogo {\r\n    width: 30px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtJQUMzQiw0QkFBNEI7RUFDOUI7QUFDRjs7QUFFQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgaHRtbCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLm5hdi1pdGVtIHtcclxuICBwYWRkaW5nOiAycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDdweDtcclxufVxyXG5cclxuLmNsaWNrYWJsZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuY29udGFpbmVyLWZsdWlkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4jYnJhbmRMb2dvIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/Utils */
    "./src/app/shared/Utils.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(ngZone, router) {
        _classCallCheck(this, HeaderComponent);

        this.ngZone = ngZone;
        this.router = router;
        this.isExpanded = false;
        this.showCreateNewRoomBtn = true;
        this.subscribeToUtilsEvents();
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "collapse",
        value: function collapse() {
          this.isExpanded = false;
        }
      }, {
        key: "goHome",
        value: function goHome() {
          this.isExpanded = false;
          window.location.replace('/');
          this.showCreateNewRoomBtn = true;
        }
      }, {
        key: "onBtnFeedbackClick",
        value: function onBtnFeedbackClick() {
          this.isExpanded = false;
        }
      }, {
        key: "onBtnContactClick",
        value: function onBtnContactClick() {
          this.isExpanded = false;
          window.location.replace('/Contact');
          this.showCreateNewRoomBtn = true;
        }
      }, {
        key: "onBtnCreateNewRoomClick",
        value: function onBtnCreateNewRoomClick() {
          this.isExpanded = false;
          this.router.navigate(['editor']);
          this.showCreateNewRoomBtn = false;
        }
      }, {
        key: "subscribeToUtilsEvents",
        value: function subscribeToUtilsEvents() {
          var _this5 = this;

          _shared_Utils__WEBPACK_IMPORTED_MODULE_2__["Utils"].broadcast.subscribe(function (message) {
            _this5.ngZone.run(function () {
              switch (message) {
                case 11
                /* LeftHomePage */
                :
                  _this5.showCreateNewRoomBtn = false;
                  break;

                default:
              }
            });
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cover {\r\n  height: 95vh;\r\n  align-items: center;\r\n  margin-bottom: 120px;\r\n  background-color: #e9ecef;\r\n}\r\n\r\n.home-img {\r\n  margin-right: 50px;\r\n  width: 50%;\r\n}\r\n\r\n.container {\r\n  top: 260px;\r\n  margin: 0 50px;\r\n}\r\n\r\n.cover .btn-lg {\r\n  padding: 0.75rem 1.25rem;\r\n  font-weight: 700;\r\n}\r\n\r\n.features {\r\n  margin: 0 100px;\r\n}\r\n\r\n.feature {\r\n  margin-bottom: 130px;\r\n}\r\n\r\nh1 {\r\n  color: #151b26;\r\n}\r\n\r\n.feature-img {\r\n  width: 600px;\r\n}\r\n\r\nh3,\r\n.feature-text {\r\n  color: #646f79;\r\n}\r\n\r\n.feature-text-left {\r\n  margin-left: 100px;\r\n}\r\n\r\n.feature-text-right {\r\n  padding-right: 100px;\r\n}\r\n\r\np {\r\n    font-size: 21px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n  .cover {\r\n    flex-direction: column;\r\n    margin-bottom: 100px;\r\n  }\r\n\r\n  .container {\r\n    position: initial;\r\n  }\r\n\r\n  .home-img {\r\n    height: auto;\r\n    width: 100%;\r\n    margin-left: 50px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .features {\r\n    margin: 0px 0px;\r\n  }\r\n\r\n  .feature {\r\n    margin-bottom: 20px;\r\n  }\r\n\r\n  .feature-img {\r\n    order: 0;\r\n    height: auto;\r\n    width: 80%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .feature-name {\r\n    font-size: 2rem;\r\n  }\r\n\r\n  .feature-text {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .feature-text-left,\r\n  .feature-text-right {\r\n    order: 1;\r\n    margin: 40px 0px;\r\n    padding: 0 40px;\r\n  }\r\n\r\n  p {\r\n      font-size: 10px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsUUFBUTtJQUNSLFlBQVk7SUFDWixVQUFVO0lBQ1YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztJQUVFLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvdmVyIHtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG59XHJcblxyXG4uaG9tZS1pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogNTBweDtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB0b3A6IDI2MHB4O1xyXG4gIG1hcmdpbjogMCA1MHB4O1xyXG59XHJcblxyXG4uY292ZXIgLmJ0bi1sZyB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5mZWF0dXJlcyB7XHJcbiAgbWFyZ2luOiAwIDEwMHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTMwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogIzE1MWIyNjtcclxufVxyXG5cclxuLmZlYXR1cmUtaW1nIHtcclxuICB3aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbmgzLFxyXG4uZmVhdHVyZS10ZXh0IHtcclxuICBjb2xvcjogIzY0NmY3OTtcclxufVxyXG5cclxuLmZlYXR1cmUtdGV4dC1sZWZ0IHtcclxuICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLXRleHQtcmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNvdmVyIHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICB9XHJcblxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1pbWcge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZXMge1xyXG4gICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlLWltZyB7XHJcbiAgICBvcmRlcjogMDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5mZWF0dXJlLW5hbWUge1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gIH1cclxuXHJcbiAgLmZlYXR1cmUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfVxyXG5cclxuICAuZmVhdHVyZS10ZXh0LWxlZnQsXHJcbiAgLmZlYXR1cmUtdGV4dC1yaWdodCB7XHJcbiAgICBvcmRlcjogMTtcclxuICAgIG1hcmdpbjogNDBweCAwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/Utils */
    "./src/app/shared/Utils.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(router) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToEditor",
        value: function goToEditor() {
          _shared_Utils__WEBPACK_IMPORTED_MODULE_3__["Utils"].broadcastInfo(11
          /* LeftHomePage */
          );

          this.router.navigate(['editor']);
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/message-bubble/message-bubble.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/message-bubble/message-bubble.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMessageBubbleMessageBubbleComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".otherPplMessage {\r\n  background-color: #efefef;\r\n}\r\n\r\n.myMessage {\r\n  background-color: #fedbbd;\r\n}\r\n\r\n.card {\r\n  border-radius: 10px;\r\n}\r\n\r\n.card-body {\r\n  padding: 8px;\r\n}\r\n\r\n.card-text {\r\n  margin: 0px;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.name {\r\n  margin-bottom: 1px;\r\n  font-weight: bold;\r\n  color: #565656;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS1idWJibGUvbWVzc2FnZS1idWJibGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UtYnViYmxlL21lc3NhZ2UtYnViYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3RoZXJQcGxNZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG59XHJcblxyXG4ubXlNZXNzYWdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVkYmJkO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4uY2FyZC10ZXh0IHtcclxuICBtYXJnaW46IDBweDtcclxufVxyXG5cclxuaHRtbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5uYW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICM1NjU2NTY7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/message-bubble/message-bubble.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/message-bubble/message-bubble.component.ts ***!
    \************************************************************/

  /*! exports provided: MessageBubbleComponent */

  /***/
  function srcAppMessageBubbleMessageBubbleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageBubbleComponent", function () {
      return MessageBubbleComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_peer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/peer.service */
    "./src/app/services/peer.service.ts");
    /* harmony import */


    var _services_name_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/name.service */
    "./src/app/services/name.service.ts");

    var MessageBubbleComponent = /*#__PURE__*/function () {
      function MessageBubbleComponent(peerService, nameService) {
        _classCallCheck(this, MessageBubbleComponent);

        this.peerService = peerService;
        this.nameService = nameService;
      }

      _createClass(MessageBubbleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myPeerId = this.peerService.getMyPeerId();
          this.displayName = this.nameService.getPeerName(this.senderName);
        }
      }]);

      return MessageBubbleComponent;
    }();

    MessageBubbleComponent.ctorParameters = function () {
      return [{
        type: _services_peer_service__WEBPACK_IMPORTED_MODULE_2__["PeerService"]
      }, {
        type: _services_name_service__WEBPACK_IMPORTED_MODULE_3__["NameService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageBubbleComponent.prototype, "senderName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MessageBubbleComponent.prototype, "content", void 0);
    MessageBubbleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-bubble',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-bubble.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/message-bubble/message-bubble.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-bubble.component.css */
      "./src/app/message-bubble/message-bubble.component.css"))["default"]]
    })], MessageBubbleComponent);
    /***/
  },

  /***/
  "./src/app/services/broadcast.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/broadcast.service.ts ***!
    \***********************************************/

  /*! exports provided: BroadcastService */

  /***/
  function srcAppServicesBroadcastServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BroadcastService", function () {
      return BroadcastService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/Message */
    "./src/app/shared/Message.ts");
    /* harmony import */


    var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./editor.service */
    "./src/app/services/editor.service.ts");
    /* harmony import */


    var _shared_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/Utils */
    "./src/app/shared/Utils.ts");
    /* harmony import */


    var _cursor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cursor.service */
    "./src/app/services/cursor.service.ts");

    var BroadcastService_1;

    var BroadcastService = BroadcastService_1 = /*#__PURE__*/function () {
      function BroadcastService(cursorService) {
        _classCallCheck(this, BroadcastService);

        this.cursorService = cursorService;
        this.chatMessageTime = 0;
      }
      /**
       * Use when first join room to ask a peer to send us oldCRDTs, old chat messages
       */


      _createClass(BroadcastService, [{
        key: "requestOldMessages",
        value: function requestOldMessages(conn, messageType) {
          var message = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](null, messageType, this.peer.id);
          conn.send(message);
        }
      }, {
        key: "sendOldCRDTs",
        value: function sendOldCRDTs(conn, previousCRDTs) {
          previousCRDTs = previousCRDTs.slice(1, previousCRDTs.length - 1); // Don't send "beg" and "end" CRDT

          if (previousCRDTs.length === 0) {
            conn.send(new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"]('', 3
            /* OldCRDTsLastBatch */
            , this.peer.id));
            return;
          } // WebRTC has max message size (different for each browser), ranging from 16Kb to 256Kb.
          // Our CRDTs can be large. Therefore we need to break them in small batches


          var crdtStrings = _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["CrdtUtils"].breakCrdtsIntoCrdtStringBatches(previousCRDTs, BroadcastService_1.CRDTDelimiter);

          for (var i = 0; i < crdtStrings.length; i++) {
            var messageType = i === crdtStrings.length - 1 ? 3
            /* OldCRDTsLastBatch */
            : 2
            /* OldCRDTs */
            ;
            var message = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](crdtStrings[i], messageType, this.peer.id);
            conn.send(message); // Send each batch
          } // Without setTimeout, cursor isn't update. Why?!


          var that = this;
          setTimeout(function () {
            return that.sendCursorInfo(conn);
          }, 10);
        }
      }, {
        key: "sendOldMessages",
        value: function sendOldMessages(conn, previousChatMessages) {
          var message = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](JSON.stringify(previousChatMessages), 9
          /* OldChatMessages */
          , this.peer.id);
          conn.send(message);
        }
        /**
         * Send old chat messages, old crdts and most recent change language
         */

      }, {
        key: "sendOldData",
        value: function sendOldData(conn, oldChatMessages, oldCRDTs) {
          this.sendOldCRDTs(conn, oldCRDTs);
          this.sendOldMessages(conn, oldChatMessages);
          this.sendChangeLanguage(conn);
        }
      }, {
        key: "sendMyCursorColor",
        value: function sendMyCursorColor(conn, myColor) {
          conn.send(new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](myColor + '', 14
          /* CursorColor */
          , this.peer.id));
        }
        /**
         * Is called when our user insert / remove something. These changes will be
         * converted to corresponding CRDT objects and broadcasted to the rest in room
         * See editor.service.ts - handle local insert / remove for more details.
         */

      }, {
        key: "broadcastInsertOrRemove",
        value: function broadcastInsertOrRemove(crdts, isInsert, connectionList) {
          var _this6 = this;

          var messageType = isInsert ? 0
          /* RemoteInsert */
          : 1
          /* RemoteRemove */
          ;

          var crdtStrings = _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["CrdtUtils"].breakCrdtsIntoCrdtStringBatches(crdts, BroadcastService_1.CRDTDelimiter);

          var _loop = function _loop(i) {
            connectionList.forEach(function (conn) {
              var messageToSend = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](crdtStrings[i], messageType, _this6.peer.id);
              conn.send(messageToSend);
            });
          };

          for (var i = 0; i < crdtStrings.length; i++) {
            _loop(i);
          }
        }
      }, {
        key: "broadcastMessageToNewPeers",
        value: function broadcastMessageToNewPeers(message, conns) {
          conns.forEach(function (connection) {
            connection.send(message);
          });
        }
      }, {
        key: "broadcastChatMessage",
        value: function broadcastChatMessage(content, connectionList, previousChatMessages) {
          var _this7 = this;

          if (content.length === 0) {
            return;
          }

          previousChatMessages.push(new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](content, 8
          /* ChatMessage */
          , this.peer.id, this.chatMessageTime));
          connectionList.forEach(function (conn) {
            var messageToSend = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](content, 8
            /* ChatMessage */
            , _this7.peer.id, _this7.chatMessageTime);
            conn.send(messageToSend);
          }); // A chat message is uniquely identified by fromPeerId and chatMessageTime.
          // We use this to avoid duplicate chat messages

          this.chatMessageTime++;
        }
      }, {
        key: "broadcastChangeLanguage",
        value: function broadcastChangeLanguage(connectionList) {
          var _this8 = this;

          connectionList.forEach(function (conn) {
            _this8.sendChangeLanguage(conn);
          });
        }
      }, {
        key: "sendChangeLanguage",
        value: function sendChangeLanguage(conn) {
          var messageToSend = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](_editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"].currentLanguage, 6
          /* ChangeLanguage */
          , this.peer.id);
          conn.send(messageToSend);
        }
      }, {
        key: "broadcastChangeName",
        value: function broadcastChangeName(connectionList, newName) {
          var _this9 = this;

          connectionList.forEach(function (conn) {
            _this9.sendChangeName(conn, newName);
          });
        }
      }, {
        key: "sendChangeName",
        value: function sendChangeName(conn, newName) {
          var messageToSend = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](newName, 17
          /* ChangeName */
          , this.peer.id);
          conn.send(messageToSend);
        }
      }, {
        key: "broadcastChangeSelectionPos",
        value: function broadcastChangeSelectionPos(event, connectionList) {
          var _this10 = this;

          connectionList.forEach(function (conn) {
            _this10.sendChangeSelectionPos(conn, event);
          });
        }
      }, {
        key: "sendChangeSelectionPos",
        value: function sendChangeSelectionPos(conn, event) {
          var message = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](JSON.stringify(event), 13
          /* ChangeSelect */
          , this.peer.id);
          conn.send(message);
        }
      }, {
        key: "broadcastChangeCursorPos",
        value: function broadcastChangeCursorPos(event, connectionList) {
          var _this11 = this;

          connectionList.forEach(function (conn) {
            _this11.sendChangeCursorPos(conn, event);
          });
        }
      }, {
        key: "sendChangeCursorPos",
        value: function sendChangeCursorPos(conn, event) {
          var message = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](JSON.stringify(event), 12
          /* ChangeCursor */
          , this.peer.id);
          conn.send(message);
        }
      }, {
        key: "sendNameAndCursorInfo",
        value: function sendNameAndCursorInfo(conn, name) {
          // Order is important! Name first and then cursor info!
          this.sendMyName(conn, name);
          this.sendCursorInfo(conn);
        }
        /**
         * Send our cursor color, cursor pos and selection pos
         */

      }, {
        key: "sendCursorInfo",
        value: function sendCursorInfo(conn) {
          this.sendMyCursorColor(conn, this.cursorService.getMyCursorColor());
          var lastCursorEvent = this.cursorService.getMyLastCursorEvent();

          if (lastCursorEvent !== null) {
            this.sendChangeCursorPos(conn, lastCursorEvent);
          }

          var lastSelectEvent = this.cursorService.getMyLastSelectEvent();

          if (lastSelectEvent !== null) {
            this.sendChangeSelectionPos(conn, lastSelectEvent);
          }
        }
      }, {
        key: "sendMyName",
        value: function sendMyName(conn, myName) {
          var message = new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](myName, 15
          /* Name */
          , this.peer.id);
          conn.send(message);
        }
      }, {
        key: "tellPeerCannotSendOldData",
        value: function tellPeerCannotSendOldData(conn) {
          conn.send(new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](null, 7
          /* CannotSendOldCRDTsOrOldChatMessages */
          , this.peer.id));
        }
        /**
         * Get our peer object from peerService
         */

      }, {
        key: "setPeer",
        value: function setPeer(peer) {
          this.peer = peer;
        }
      }]);

      return BroadcastService;
    }();

    BroadcastService.CRDTDelimiter = '#$'; // Has to be at least 2 unique chars

    BroadcastService.ctorParameters = function () {
      return [{
        type: _cursor_service__WEBPACK_IMPORTED_MODULE_5__["CursorService"]
      }];
    };

    BroadcastService = BroadcastService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], BroadcastService);
    /***/
  },

  /***/
  "./src/app/services/cursor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/cursor.service.ts ***!
    \********************************************/

  /*! exports provided: CursorService */

  /***/
  function srcAppServicesCursorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CursorService", function () {
      return CursorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _name_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./name.service */
    "./src/app/services/name.service.ts");

    var CursorService = /*#__PURE__*/function () {
      function CursorService(nameService) {
        _classCallCheck(this, CursorService);

        this.nameService = nameService;
        this.selectionDecorations = []; // Color: 1 to 25. peerColors include myColor

        this.peerColors = new Map();
        this.oldNameTags = new Map();
        this.oldCursors = new Map();
        this.otherPeerNameTagAndCursorIndices = new Map();
        this.myLastCursorEvent = null;
        this.myLastSelectEvent = null;
        this.peerMostRecentCursorEvents = new Map();
        this.peerMostRecentSelectEvents = new Map();
        this.contentWidgetId = 0;
        this.showNameTag = true;
        this.justJoinRoom = true;
      }

      _createClass(CursorService, [{
        key: "drawSelection",
        value: function drawSelection(editor, startLine, startCol, endLine, endCol, ofPeerId) {
          var color = this.peerColors.get(ofPeerId);
          var deco = this.selectionDecorations.filter(function (d) {
            return d.peerId === ofPeerId;
          });
          var oldDecoration = deco.map(function (d) {
            return d.decoration;
          });
          var decoration = editor.deltaDecorations(oldDecoration, [{
            range: new monaco.Range(startLine, startCol, endLine, endCol),
            options: {
              className: 'monaco-select-' + color,
              stickiness: monaco.editor.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore
            }
          }]);
          this.selectionDecorations = this.selectionDecorations.filter(function (d) {
            return d.peerId !== ofPeerId;
          });
          this.selectionDecorations.push(new Decoration(decoration, ofPeerId));
        }
      }, {
        key: "drawCursor",
        value: function drawCursor(editor, ofPeerId, newLineNumber, newColumn) {
          var oldCursor = this.oldCursors.get(ofPeerId);

          if (oldCursor) {
            editor.removeContentWidget(oldCursor);
          }

          var cursorColor = this.peerColors.get(ofPeerId);
          var contentWidgetId = this.contentWidgetId++ + '';
          var newCursorWidget = {
            domNode: null,
            getId: function getId() {
              return contentWidgetId;
            },
            getDomNode: function getDomNode() {
              if (!this.domNode) {
                this.domNode = document.createElement('div');
                this.domNode.classList.add('monaco-cursor-' + cursorColor);
              }

              return this.domNode;
            },
            getPosition: function getPosition() {
              return {
                position: {
                  lineNumber: newLineNumber,
                  column: newColumn
                },
                preference: [monaco.editor.ContentWidgetPositionPreference.EXACT]
              };
            }
          };
          editor.addContentWidget(newCursorWidget);
          this.oldCursors.set(ofPeerId, newCursorWidget);
          var index = editor.getModel().getOffsetAt(new monaco.Position(newLineNumber, newColumn));
          this.otherPeerNameTagAndCursorIndices.set(ofPeerId, index);
        }
      }, {
        key: "drawNameTag",
        value: function drawNameTag(editor, ofPeerId, newLineNumber, newColumn, isMyNameTag) {
          var oldNameTag = this.oldNameTags.get(ofPeerId);

          if (oldNameTag) {
            editor.removeContentWidget(oldNameTag);
          }

          var nameTagOwner = this.nameService.getPeerName(ofPeerId);
          var nameTagColor = this.peerColors.get(ofPeerId);
          var contentWidgetId = this.contentWidgetId++ + '';
          var showTag = this.showNameTag;
          var newNameTagWidget = {
            domNode: null,
            getId: function getId() {
              return contentWidgetId;
            },
            getDomNode: function getDomNode() {
              if (!this.domNode) {
                this.domNode = document.createElement('div');
                this.domNode.textContent = nameTagOwner;
                this.domNode.style.whiteSpace = 'nowrap';
                this.domNode.style.background = 'var(--monaco-color-' + nameTagColor + ')';
                this.domNode.classList.add('nameTagText');

                if (!showTag) {
                  this.domNode.classList.add('hide');
                }
              }

              return this.domNode;
            },
            getPosition: function getPosition() {
              return {
                position: {
                  lineNumber: newLineNumber,
                  column: newColumn
                },
                preference: [monaco.editor.ContentWidgetPositionPreference.ABOVE]
              };
            }
          };
          editor.addContentWidget(newNameTagWidget);
          this.oldNameTags.set(ofPeerId, newNameTagWidget);
          var index = editor.getModel().getOffsetAt(new monaco.Position(newLineNumber, newColumn));

          if (!isMyNameTag) {
            this.otherPeerNameTagAndCursorIndices.set(ofPeerId, index);
          } else {
            this.myNameTagIndex = index;
          }
        }
      }, {
        key: "hideAllNameTags",
        value: function hideAllNameTags() {
          var nameTags = Array.from(this.oldNameTags.values());

          for (var i = 0; i < nameTags.length; i++) {
            var nameTag = nameTags[i];
            nameTag.domNode.classList.add('hide');
          }

          this.showNameTag = false;
        }
      }, {
        key: "showAllNameTags",
        value: function showAllNameTags() {
          var nameTags = Array.from(this.oldNameTags.values());

          for (var i = 0; i < nameTags.length; i++) {
            var nameTag = nameTags[i];
            nameTag.domNode.classList.remove('hide');
          }

          this.showNameTag = true;
        }
        /**
         * Manually calculate where nameTag and cursor should be after an insertion
         */

      }, {
        key: "nameTagAndCursorIndexAfterInsert",
        value: function nameTagAndCursorIndexAfterInsert(originalIndex, insertStartIndex, insertLength, moveNameTagOrCursorWhenInsertAtRightEdge) {
          if (originalIndex < insertStartIndex) {
            return originalIndex;
          } else if (originalIndex === insertStartIndex) {
            if (moveNameTagOrCursorWhenInsertAtRightEdge) {
              return originalIndex + insertLength;
            } else {
              return originalIndex;
            }
          } else {
            return originalIndex + insertLength;
          }
        }
        /**
         * Manually calculate where nameTag and cursor should be after a removal
         */

      }, {
        key: "nameTagAndCursorIndexAfterRemove",
        value: function nameTagAndCursorIndexAfterRemove(originalIndex, removeStartIndex, removeLength) {
          if (removeStartIndex >= originalIndex) {
            return originalIndex;
          } else {
            return Math.max(removeStartIndex, originalIndex - removeLength);
          }
        }
      }, {
        key: "recalculateAllNameTagAndCursorIndicesAfterInsert",
        value: function recalculateAllNameTagAndCursorIndicesAfterInsert(insertStartIndex, insertLength, peerIdWhoMadeThisInsertion) {
          // Recalculate peers' nameTag and cursor indices
          var peerIds = Array.from(this.otherPeerNameTagAndCursorIndices.keys());

          for (var i = 0; i < peerIds.length; i++) {
            var peerId = peerIds[i];
            var isThisPeerMadeThisInsertion = peerId === peerIdWhoMadeThisInsertion;
            var newIndex = this.nameTagAndCursorIndexAfterInsert(this.otherPeerNameTagAndCursorIndices.get(peerId), insertStartIndex, insertLength, isThisPeerMadeThisInsertion);
            this.otherPeerNameTagAndCursorIndices.set(peerId, newIndex);
          } // Recalculate my nameTag and cursor index


          var iMadeThisInsert = peerIdWhoMadeThisInsertion === this.myPeerId;
          var myNewIndex = this.nameTagAndCursorIndexAfterInsert(this.myNameTagIndex, insertStartIndex, insertLength, iMadeThisInsert);
          this.myNameTagIndex = myNewIndex;
        }
      }, {
        key: "recalculateAllNameTagAndCursorIndicesAfterRemove",
        value: function recalculateAllNameTagAndCursorIndicesAfterRemove(removeStartIndex, removeLength) {
          // Recalculate peers' nameTag and cursor indices
          var peerIds = Array.from(this.otherPeerNameTagAndCursorIndices.keys());

          for (var i = 0; i < peerIds.length; i++) {
            var peerId = peerIds[i];
            var newIndex = this.nameTagAndCursorIndexAfterRemove(this.otherPeerNameTagAndCursorIndices.get(peerId), removeStartIndex, removeLength);
            this.otherPeerNameTagAndCursorIndices.set(peerId, newIndex);
          } // Recalculate my nameTag index


          var myNewIndex = this.nameTagAndCursorIndexAfterRemove(this.myNameTagIndex, removeStartIndex, removeLength);
          this.myNameTagIndex = myNewIndex;
        }
      }, {
        key: "redrawPeersNameTagsAndCursors",
        value: function redrawPeersNameTagsAndCursors(editor) {
          var _this12 = this;

          this.otherPeerNameTagAndCursorIndices.forEach(function (index, peerId) {
            var pos = editor.getModel().getPositionAt(index);

            _this12.drawNameTag(editor, peerId, pos.lineNumber, pos.column, false);

            _this12.drawCursor(editor, peerId, pos.lineNumber, pos.column);
          });
        }
      }, {
        key: "redrawMyNameTag",
        value: function redrawMyNameTag(editor, myPeerId) {
          var pos = editor.getModel().getPositionAt(this.myNameTagIndex);
          this.drawNameTag(editor, myPeerId, pos.lineNumber, pos.column, true);
        }
      }, {
        key: "setPeerColor",
        value: function setPeerColor(peerId, color) {
          this.peerColors.set(peerId, color);
        }
      }, {
        key: "removePeer",
        value: function removePeer(editor, peerId) {
          this.peerColors["delete"](peerId); // Clean select decoration

          var selectDecoration = this.selectionDecorations.filter(function (d) {
            return d.peerId === peerId;
          }).map(function (d) {
            return d.decoration;
          });
          editor.deltaDecorations(selectDecoration, []); // Clean name tag

          var oldNameTag = this.oldNameTags.get(peerId);

          if (oldNameTag) {
            editor.removeContentWidget(oldNameTag);
            this.oldNameTags["delete"](peerId);
            this.otherPeerNameTagAndCursorIndices["delete"](peerId);
          } // Clean cursor


          var oldCursor = this.oldCursors.get(peerId);

          if (oldCursor) {
            editor.removeContentWidget(oldCursor);
            this.oldCursors["delete"](peerId);
            this.otherPeerNameTagAndCursorIndices["delete"](peerId);
          }
        }
      }, {
        key: "getPeerColor",
        value: function getPeerColor(peerId) {
          return this.peerColors.get(peerId);
        }
      }, {
        key: "getMyCursorColor",
        value: function getMyCursorColor() {
          return this.peerColors.get(this.myPeerId);
        }
      }, {
        key: "setMyCursorColorAndPeerId",
        value: function setMyCursorColorAndPeerId(myPeerId, color) {
          this.setPeerColor(myPeerId, color);
          this.myPeerId = myPeerId;
        }
      }, {
        key: "getMyLastCursorEvent",
        value: function getMyLastCursorEvent() {
          return this.myLastCursorEvent;
        }
      }, {
        key: "setMyLastCursorEvent",
        value: function setMyLastCursorEvent(event) {
          this.myLastCursorEvent = event;
        }
      }, {
        key: "getMyLastSelectEvent",
        value: function getMyLastSelectEvent() {
          return this.myLastSelectEvent;
        }
      }, {
        key: "setMyLastSelectEvent",
        value: function setMyLastSelectEvent(event) {
          this.myLastSelectEvent = event;
        }
      }, {
        key: "getPeerMostRecentCursorEvent",
        value: function getPeerMostRecentCursorEvent(peerId) {
          return this.peerMostRecentCursorEvents.get(peerId);
        }
      }, {
        key: "setPeerMostRecentCursorChange",
        value: function setPeerMostRecentCursorChange(peerId, event) {
          this.peerMostRecentCursorEvents.set(peerId, event);
        }
      }, {
        key: "getPeerMostRecentSelectEvent",
        value: function getPeerMostRecentSelectEvent(peerId) {
          return this.peerMostRecentSelectEvents.get(peerId);
        }
      }, {
        key: "setPeerMostRecentSelectEvent",
        value: function setPeerMostRecentSelectEvent(peerId, event) {
          this.peerMostRecentSelectEvents.set(peerId, event);
        }
      }]);

      return CursorService;
    }();

    CursorService.ctorParameters = function () {
      return [{
        type: _name_service__WEBPACK_IMPORTED_MODULE_2__["NameService"]
      }];
    };

    CursorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CursorService);
    /**
     * Wrap Monaco's decoration (add peerId)
     */

    var Decoration = /*#__PURE__*/_createClass(function Decoration(decoration, peerId) {
      _classCallCheck(this, Decoration);

      this.decoration = decoration;
      this.peerId = peerId;
    });
    /***/

  },

  /***/
  "./src/app/services/editor.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/editor.service.ts ***!
    \********************************************/

  /*! exports provided: EditorService */

  /***/
  function srcAppServicesEditorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditorService", function () {
      return EditorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/CRDT */
    "./src/app/shared/CRDT.ts");
    /* harmony import */


    var _shared_CustomNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/CustomNumber */
    "./src/app/shared/CustomNumber.ts");
    /* harmony import */


    var _shared_BalancedBST__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/BalancedBST */
    "./src/app/shared/BalancedBST.ts");
    /* harmony import */


    var _cursor_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cursor.service */
    "./src/app/services/cursor.service.ts");

    var EditorService_1;

    var EditorService = EditorService_1 = /*#__PURE__*/function () {
      function EditorService(cursorService) {
        _classCallCheck(this, EditorService);

        this.cursorService = cursorService;
        this.curClock = 0;
        this.crdtEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // Init BST and add 'begin' and 'end' CRDTs.
        // All CRDTs from now on will be in between these 2 limits

        this.bst = new _shared_BalancedBST__WEBPACK_IMPORTED_MODULE_4__["BalancedBST"]();
        this.bst.insert(new _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__["CRDT"]('_beg', new _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__["CRDTId"]([new _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__["Identifier"](1, 0)], this.curClock++)));
        this.bst.insert(new _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__["CRDT"]('_end', new _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__["CRDTId"]([new _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__["Identifier"](_shared_CustomNumber__WEBPACK_IMPORTED_MODULE_3__["CustomNumber"].BASE - 1, 0)], this.curClock++)));
      }

      _createClass(EditorService, [{
        key: "handleLocalInsert",
        value:
        /**
         * Is called when our user inserts some text. This function will generate CRDT objects
         * correspond to each new char, add them to BST and then broadcast these new CRDT objects
         */
        function handleLocalInsert(auxEditor, textToInsert, startLineNumber, startColumn) {
          if (EditorService_1.siteId === -1) throw new Error('Error: call handleLocalInsert before setting siteId');
          if (textToInsert === '') return;
          var auxEditorTextModel = auxEditor.getModel(); // IMPORTANT: Update auxiliary editor ONLY AFTER getting the CORRECT insertAtIndex

          var insertAtIndex = this.posToIndex(auxEditorTextModel, startLineNumber, startColumn) + 1; // Because we have _beg limit
          // Update aux editor

          this.writeTextToMonacoAtPos(auxEditor, auxEditorTextModel, textToInsert, startLineNumber, startColumn);
          var chArr = textToInsert.split(''); // Generate N CrdtIds correspond to N chars in textToInsert

          var crdtIdBefore = this.bst.getDataAt(insertAtIndex - 1).id;
          var crdtIdAfter = this.bst.getDataAt(insertAtIndex).id;

          var listCrdtIdsBetween = _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__["CRDTId"].generateNPositionsBetween(crdtIdBefore, crdtIdAfter, chArr.length, EditorService_1.siteId, this.curClock);

          this.curClock += chArr.length; // Generate N new CRDTIds therefore increment curClock by N
          // Combine CrdtId and char to make CRDT object

          var chArrIndex = 0;
          var listCRDTBetween = listCrdtIdsBetween.map(function (crdtId) {
            return new _shared_CRDT__WEBPACK_IMPORTED_MODULE_2__["CRDT"](chArr[chArrIndex++], crdtId);
          }); // Insert to our BST

          for (var i = 0; i < listCRDTBetween.length; i++) {
            this.bst.insert(listCRDTBetween[i]);
          } // Tell peerService to broadcast these new CRDTs
          // PeerService listens to this event at subscribeToEditorServiceEvents()


          this.crdtsToTransfer = listCRDTBetween;
          this.crdtEvent.emit(true);
        }
        /**
         * Is called when a peer sends us a remote insert request. This function will take
         * these new CRDT objects, insert them to BST to compute their indices and then write them
         * to their correct positions on Monaco Editor
         */

      }, {
        key: "handleRemoteInsert",
        value: function handleRemoteInsert(editor, auxEditor, newCRDTs, fromPeerId) {
          var editorTextModel = editor.getModel();
          var auxEditorTextModel = auxEditor.getModel();
          var insertingIndices = new Array(newCRDTs.length); // Note: Indices from BST and from Monaco Editor are in sync. Getting the correct indices
          // from BST means that we have computed the correct indices to write to Monaco

          for (var _i = 0; _i < newCRDTs.length; _i++) {
            var insertingIndex = this.bst.insert(newCRDTs[_i]);
            if (insertingIndex === -1) insertingIndices[_i] = -1;else insertingIndices[_i] = insertingIndex - 1; // '-1' because __beg limit in BST increase index by 1
          } // Rule out -1 indices (-1 indices mean we have inserted these CRDTs before)


          var actuallyInsertingChars = [];

          for (var _i2 = 0; _i2 < newCRDTs.length; _i2++) {
            if (insertingIndices[_i2] !== -1) {
              actuallyInsertingChars.push(newCRDTs[_i2].ch);
            }
          }

          var actuallyInsertingIndices = insertingIndices.filter(function (index) {
            return index !== -1;
          }); // Write continuous ranges of text to screen

          var i = 0;
          var startIndexMonaco = -1;
          var endIndexMonaco = -1;

          while (i < actuallyInsertingIndices.length) {
            // Find continuous ranges of text
            startIndexMonaco = actuallyInsertingIndices[i];
            var j = i + 1;

            while (j < actuallyInsertingIndices.length && actuallyInsertingIndices[j] === actuallyInsertingIndices[j - 1] + 1) {
              j++;
            }

            endIndexMonaco = actuallyInsertingIndices[j - 1];
            i = j; // Get text to be inserted

            var numElements = endIndexMonaco - startIndexMonaco + 1;
            var endIndexArrInclusive = i - 1;
            var startIndexArr = endIndexArrInclusive - numElements + 1;
            var textToInsert = actuallyInsertingChars.slice(startIndexArr, endIndexArrInclusive + 1).join('');

            if (actuallyInsertingChars[startIndexArr] === ' ' || actuallyInsertingChars[startIndexArr] === '\n' || actuallyInsertingChars.length > 10) {
              editorTextModel.pushStackElement();
            }

            EditorService_1.remoteOpLeft++; // Avoid triggering monaco change event
            // Write text to aux Editor

            this.writeTextToMonacoAtIndex(auxEditor, auxEditorTextModel, textToInsert, startIndexMonaco); // Write text to main Monaco Editor

            this.writeTextToMonacoAtIndex(editor, editorTextModel, textToInsert, startIndexMonaco); // Calculate new pos for nameTag after remote insert

            this.cursorService.recalculateAllNameTagAndCursorIndicesAfterInsert(startIndexMonaco, textToInsert.length, fromPeerId);
          } // Redraw nameTags


          this.cursorService.redrawPeersNameTagsAndCursors(editor);
        }
        /**
         * Is called when our user removes some text. This function will remove corresponding
         * CRDT objects from BST and broadcast these removed CRDTs to the rest in room
         */

      }, {
        key: "handleLocalRemove",
        value: function handleLocalRemove(auxEditor, startLineNumber, startColumn, endLineNumber, endColumn, length) {
          if (EditorService_1.siteId === -1) throw new Error('Error: call handleLocalRemove before setting siteId');
          if (length === 0) return;
          var auxEditorTextModel = auxEditor.getModel(); // IMPORTANT: Update auxiliary editor ONLY AFTER getting the CORRECT startIndex

          var startIndex = this.posToIndex(auxEditorTextModel, startLineNumber, startColumn) + 1; // // '+1' because __beg limit in BST increase index by 1

          this.deleteTextFromMonacoByPos(auxEditorTextModel, startLineNumber, startColumn, endLineNumber, endColumn); // Note: Indices from BST and from Monaco Editor are in sync.
          // Ex: CRDT at index 5 from BST will correspond to char at index 5 from Monaco

          var removedCRDTs = [];

          for (var i = 0; i < length; i++) {
            var crdtToBeRemoved = this.bst.getDataAt(startIndex);
            removedCRDTs.push(crdtToBeRemoved);
            this.bst.remove(crdtToBeRemoved);
          } // Tell peerService to broadcast these removed CRDTs
          // PeerService listens to this event at subscribeToEditorServiceEvents()


          this.crdtsToTransfer = removedCRDTs;
          this.crdtEvent.emit(false);
        }
        /**
         * Is called when a peer sends us a remote remove request. This function will take
         * these to-be-removed CRDT objects, remove them from BST and get their indices,
         * then delete chars with the same indices in Monaco
         */

      }, {
        key: "handleRemoteRemove",
        value: function handleRemoteRemove(editor, auxEditor, toBeRemovedCRDTs) {
          var editorTextModel = editor.getModel();
          var auxEditorTextModel = auxEditor.getModel();
          var deletingIndices = new Array(toBeRemovedCRDTs.length);
          var offSet = 0; // offSet to add back to index because deleting 1 element will decrease the indices of all elements after it

          for (var _i3 = 0; _i3 < toBeRemovedCRDTs.length; _i3++) {
            var deletingIndex = this.bst.remove(toBeRemovedCRDTs[_i3]);
            if (deletingIndex === -1) deletingIndices[_i3] = -1;else {
              deletingIndices[_i3] = deletingIndex - 1 + offSet; // '-1' because __beg limit in BST increase index by 1

              offSet++;
            }
          } // Rule out -1 indices (-1 means our BST doesn't have that CRDT. Probably either us or other peer has deleted it
          // before this request comes)


          var actuallyDeletingIndices = deletingIndices.filter(function (index) {
            return index !== -1;
          }); // Delete continuous ranges of text from the screen

          var i = actuallyDeletingIndices.length - 1; // Delete backwards to avoid messing up indices

          var startIndexMonaco = -1;
          var endIndexMonaco = -1;

          while (i >= 0) {
            endIndexMonaco = actuallyDeletingIndices[i];
            var j = i - 1;

            while (j >= 0 && actuallyDeletingIndices[j] + 1 === actuallyDeletingIndices[j + 1]) {
              j--;
            }

            startIndexMonaco = actuallyDeletingIndices[j + 1];
            i = j; // Delete from the screen

            EditorService_1.remoteOpLeft++; // Avoid triggering monaco change event
            // main Editor

            this.deleteTextFromMonacoByIndices(editorTextModel, startIndexMonaco, endIndexMonaco + 1); // Calculate new pos for nameTag after remote remove

            var deleteLength = endIndexMonaco - startIndexMonaco + 1;
            this.cursorService.recalculateAllNameTagAndCursorIndicesAfterRemove(startIndexMonaco, deleteLength); // aux Editor

            this.deleteTextFromMonacoByIndices(auxEditorTextModel, startIndexMonaco, endIndexMonaco + 1);
          } // Actually redraw nameTag


          this.cursorService.redrawPeersNameTagsAndCursors(editor);
        }
      }, {
        key: "getEditorContent",
        value: function getEditorContent(editor) {
          var editorTextModel = editor.getModel();
          return editorTextModel.getValue();
        }
      }, {
        key: "writeTextToMonacoAtIndex",
        value: function writeTextToMonacoAtIndex(editor, editorTextModel, text, startIndex) {
          var pos = this.indexToPos(editorTextModel, startIndex);
          this.writeTextToMonacoAtPos(editor, editorTextModel, text, pos.lineNumber, pos.column);
        }
      }, {
        key: "deleteTextFromMonacoByIndices",
        value: function deleteTextFromMonacoByIndices(editorTextModel, startIndex, endIndex) {
          var startPos = this.indexToPos(editorTextModel, startIndex);
          var endPos = this.indexToPos(editorTextModel, endIndex);
          this.deleteTextFromMonacoByPos(editorTextModel, startPos.lineNumber, startPos.column, endPos.lineNumber, endPos.column);
        }
      }, {
        key: "deleteTextFromMonacoByPos",
        value: function deleteTextFromMonacoByPos(editorTextModel, startLineNumber, startColumn, endLineNumber, endColumn) {
          var range = new monaco.Range(startLineNumber, startColumn, endLineNumber, endColumn);
          editorTextModel.pushEditOperations([], [{
            range: range,
            text: null
          }]);
        }
      }, {
        key: "writeTextToMonacoAtPos",
        value: function writeTextToMonacoAtPos(editor, editorTextModel, text, startLineNumber, startColumn) {
          var selection = editor.getSelection();
          var selectionEndIndex = this.posToIndex(editorTextModel, selection.endLineNumber, selection.endColumn);
          var isTypingAtLeftEdge = startLineNumber === selection.startLineNumber && startColumn === selection.startColumn;
          var isTypingAtRightEdge = startLineNumber === selection.endLineNumber && startColumn === selection.endColumn;
          var range = new monaco.Range(startLineNumber, startColumn, startLineNumber, startColumn);
          editorTextModel.pushEditOperations([], [{
            range: range,
            text: text,
            forceMoveMarkers: true
          }]);

          if (isTypingAtRightEdge) {
            // Do not grow our selection when typing at the right edge of that selection
            editor.setSelection(selection);
          } else if (isTypingAtLeftEdge) {
            // Grow our selection when typing at left edge
            var endIndex = selectionEndIndex + text.length;
            var endPos = this.indexToPos(editorTextModel, endIndex);
            var newSelectionRange = new monaco.Range(startLineNumber, startColumn, endPos.lineNumber, endPos.column);
            editor.setSelection(newSelectionRange);
          }
        }
      }, {
        key: "indexToPos",
        value: function indexToPos(editorTextModel, index) {
          return editorTextModel.getPositionAt(index);
        }
      }, {
        key: "posToIndex",
        value: function posToIndex(editorTextModel, lineNumber, column) {
          return editorTextModel.getOffsetAt(new monaco.Position(lineNumber, column));
        }
      }, {
        key: "getOldCRDTsAsSortedArray",
        value: function getOldCRDTsAsSortedArray() {
          return this.bst.toSortedArray();
        }
      }, {
        key: "getCrdtsToTransfer",
        value: function getCrdtsToTransfer() {
          return this.crdtsToTransfer;
        }
        /**
         * Classify important change events that needed to be applied right away such as mouse click
         */

      }], [{
        key: "setSiteId",
        value: function setSiteId(id) {
          EditorService_1.siteId = id;
        }
      }, {
        key: "isCursorOrSelectEventImportant",
        value: function isCursorOrSelectEventImportant(event) {
          if (event.reason === 3
          /* Explicit */
          || event.reason === 6
          /* Redo */
          || event.reason === 5
          /* Undo */
          || event.source === "mouse"
          /* MOUSE_EVENT */
          && event.reason === 0
          /* NotSet */
          || event.source === "editor.contrib.dragAndDrop"
          /* DRAG_AND_DROP_EVENT */
          || event.source === "editor.action.deletelines"
          /* CTRL_SHIFT_K_EVENT */
          || event.source === "editor.action.insertLineAfter"
          /* CTRL_ENTER_EVENT */
          || event.source === "editor.action.insertLineBefore"
          /* CTRL_SHIFT_ENTER_EVENT */
          ) {
            return true;
          }
        }
      }]);

      return EditorService;
    }();

    EditorService.defaultLanguage = 'javascript';
    EditorService.currentLanguage = EditorService_1.defaultLanguage;
    EditorService.siteId = -1;
    EditorService.remoteOpLeft = 0;

    EditorService.ctorParameters = function () {
      return [{
        type: _cursor_service__WEBPACK_IMPORTED_MODULE_5__["CursorService"]
      }];
    };

    EditorService = EditorService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EditorService);
    /***/
  },

  /***/
  "./src/app/services/name.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/name.service.ts ***!
    \******************************************/

  /*! exports provided: NameService */

  /***/
  function srcAppServicesNameServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NameService", function () {
      return NameService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NameService = /*#__PURE__*/function () {
      function NameService() {
        _classCallCheck(this, NameService);

        this.peersNames = new Map();
        this.animalNames = ['Bird', 'Dog', 'Donkey', 'Drever', 'Earwig', 'Seal', 'Penguin', 'Flamingo', 'Fossa', 'Cat', 'Bear', 'Lion', 'Tiger', 'Snake', 'Python', 'Turtle', 'Frog', 'Deer', 'Bat', 'Horse', 'Wolf', 'Squirrel', 'Giraffe', 'Leopard', 'Panda', 'Gorilla', 'Raccoon', 'Owl', 'Otter', 'Goat', 'Shark', 'Crocodile', 'Chimpanzee', 'Koala', 'Cheetah', 'Chicken', 'Duck', 'Sheep', 'Sea Lion', 'Hare', 'Weasel', 'Goose', 'Ostrich', 'Kangaroo', 'Armadillo', 'Falcon', 'Lizard', 'Vulture', 'Bull', 'Akita', 'Albatross', 'Hornet', 'Avocet', 'Baboon', 'Badger', 'Balinese', 'Buffalo', 'Chinchilla', 'Cichlid', 'Parrot', 'Butterfly', 'Hedgehog', 'Ant', 'Spider', 'Antelope', 'Lemurs', 'Hyenas', 'Mice', 'Rat', 'Elephant', 'Fox', 'Snail', 'Fish', 'Salmon', 'Fly', 'Cow', 'Rabit', 'Possum', 'Camel', 'Chipmunk', 'Zebra', 'Mamba', 'Rhino', 'Octopus', 'Monkey', 'Owl', 'Aligator', 'Starfish', 'Crab', 'Jellyfish', 'Ox', 'Eagle', 'Woodpecker', 'Walrus'];
        this.adjectives = ['Likeable', 'Amiable', 'Charming', 'Naughty', 'Saucy', 'Frank', 'Generous', 'Clever', 'Sincere', 'Helpful', 'Patient', 'Diligent', 'Smart', 'Joyous', 'Reliable', 'Cute', 'Loyal', 'Energetic', 'Jolly', 'Awesome', 'Cheerful', 'Chatty', 'Hilarious', 'Witty', 'Humorous', 'Amusing', 'Ambitious', 'Flashy', 'Cool', 'Decisive', 'Fearless'];
      }

      _createClass(NameService, [{
        key: "giveMyselfRandomName",
        value: function giveMyselfRandomName(peerId) {
          var randAnimalIndex = Math.floor(Math.random() * this.animalNames.length);
          var randAdjIndex = Math.floor(Math.random() * this.adjectives.length);
          this.setPeerName(peerId, this.adjectives[randAdjIndex] + ' ' + this.animalNames[randAnimalIndex]);
        }
      }, {
        key: "setPeerName",
        value: function setPeerName(peerId, name) {
          this.peersNames.set(peerId, name);
        }
      }, {
        key: "getPeerName",
        value: function getPeerName(peerId) {
          return this.peersNames.get(peerId);
        }
      }]);

      return NameService;
    }();

    NameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NameService);
    /***/
  },

  /***/
  "./src/app/services/peer.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/peer.service.ts ***!
    \******************************************/

  /*! exports provided: PeerService */

  /***/
  function srcAppServicesPeerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeerService", function () {
      return PeerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_Message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/Message */
    "./src/app/shared/Message.ts");
    /* harmony import */


    var _room_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./room.service */
    "./src/app/services/room.service.ts");
    /* harmony import */


    var _editor_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./editor.service */
    "./src/app/services/editor.service.ts");
    /* harmony import */


    var _shared_Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/Utils */
    "./src/app/shared/Utils.ts");
    /* harmony import */


    var _shared_CursorChangeInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/CursorChangeInfo */
    "./src/app/shared/CursorChangeInfo.ts");
    /* harmony import */


    var _shared_SelectionChangeInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/SelectionChangeInfo */
    "./src/app/shared/SelectionChangeInfo.ts");
    /* harmony import */


    var _cursor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cursor.service */
    "./src/app/services/cursor.service.ts");
    /* harmony import */


    var _shared_AlertType__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../shared/AlertType */
    "./src/app/shared/AlertType.ts");
    /* harmony import */


    var _name_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./name.service */
    "./src/app/services/name.service.ts");
    /* harmony import */


    var _shared_NameColor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../shared/NameColor */
    "./src/app/shared/NameColor.ts");
    /* harmony import */


    var _broadcast_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./broadcast.service */
    "./src/app/services/broadcast.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _turnServerService__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./turnServerService */
    "./src/app/services/turnServerService.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var STOP_BROADCAST_AFTER_MILLI_SECONDS = 5000;

    var PeerService = /*#__PURE__*/function () {
      function PeerService(roomService, cursorService, editorService, nameService, broadcastService, turnServerService) {
        _classCallCheck(this, PeerService);

        this.roomService = roomService;
        this.cursorService = cursorService;
        this.editorService = editorService;
        this.nameService = nameService;
        this.broadcastService = broadcastService;
        this.turnServerService = turnServerService;
        this.peerIdsToSendOldCrdtsAndOldChatMessages = [];
        this.peerIdsInRoomWhenFirstEnter = [];
        this.connectionsIAmHolding = [];
        this.hasReceivedAllOldCRDTs = false;
        this.hasReceivedOldChatMessages = false;
        this.newlyJoinedConnsNeededBroadcasting = [];
        this.previousChatMessages = [];
        this.nameColorList = [];
        this.hasNotShowInternetDisconnect = true;
        this.connectionEstablished = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * Is called when both main and aux monaco editor are ready
       */


      _createClass(PeerService, [{
        key: "connectToPeerServerAndInit",
        value: function connectToPeerServerAndInit() {
          var _this13 = this;

          var iceServers = [{
            url: 'stun:relay.backups.cz'
          }, {
            url: 'turn:relay.backups.cz?transport=tcp',
            username: 'webrtc',
            credential: 'webrtc'
          }];
          this.turnServerService.getTurnStunToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_15__["finalize"])(function () {
            // Finally block
            _this13.peer = new Peer({
              host: src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].peerServerHost,
              port: '/..',
              secure: true,
              config: {
                iceServers: iceServers
              },
              pingInterval: 3000,
              debug: 2
            });

            _this13.broadcastService.setPeer(_this13.peer);

            _this13.listenToPeerServerEvent();

            _this13.registerConnectToMeEvent();

            _this13.subscribeToEditorServiceEvents();

            _this13.listenToBrowserOffline();
          })).subscribe(function (token) {
            iceServers = token.ice_servers;
          }, function (error) {
            console.error('Cannot get Turn server token from Twilio. Check your credential', error);
          });
        }
      }, {
        key: "listenToPeerServerEvent",
        value: function listenToPeerServerEvent() {
          var _this14 = this;

          this.peer.on("open"
          /* Open */
          , function (myId) {
            console.log('I have connected to peerServer. My id: ' + myId);

            _this14.connectionEstablished.emit(true);

            _this14.KeepSendDummyRequestToKeepServerAlive();
          });
          this.peer.on("disconnected"
          /* Disconnected */
          , function () {
            // Disconnect => destroy permanently this peer
            _this14.peer.destroy();

            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].handlePeerError('You/PeerServer disconnects. Going back to Home page?');
          });
          this.peer.on("error"
          /* Error */
          , function (error) {
            console.error(error);
          });
        }
        /**
         * What to do when a peer send me a connect request
         */

      }, {
        key: "registerConnectToMeEvent",
        value: function registerConnectToMeEvent() {
          var _this15 = this;

          this.peer.on("connection"
          /* Connection */
          , function (conn) {
            _this15.setupListenerForConnection(conn);
          });
        }
        /**
         * A better way to determine online / offline status is to try sending a HTTP request to some servers
         * and wait for a response. For simplicity, however, we use the method below
         */

      }, {
        key: "listenToBrowserOffline",
        value: function listenToBrowserOffline() {
          var _this16 = this;

          window.addEventListener('offline', function (e) {
            if (_this16.hasNotShowInternetDisconnect) {
              _this16.hasNotShowInternetDisconnect = false;

              _this16.peer.destroy();

              _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].handlePeerError('Please check your Internet connection. Going back to Home page?');
            }
          });
        }
      }, {
        key: "KeepSendDummyRequestToKeepServerAlive",
        value: function KeepSendDummyRequestToKeepServerAlive() {
          var _this17 = this;

          var tenMinutesInMilliSeconds = 10 * 60 * 1000;
          setInterval(function () {
            return _this17.roomService.sendDummyRequestToKeepPeerServerAlive();
          }, tenMinutesInMilliSeconds);
        }
      }, {
        key: "connectToPeer",
        value: function connectToPeer(otherPeerId, getOldMessages) {
          var conn = this.peer.connect(otherPeerId, {
            reliable: true,
            serialization: 'json'
          });

          if (getOldMessages === true) {
            this.connToGetOldMessages = conn;
          }

          this.setupListenerForConnection(conn);
        }
      }, {
        key: "connectToTheRestInRoom",
        value: function connectToTheRestInRoom(exceptPeerId) {
          var _this18 = this;

          this.peerIdsInRoomWhenFirstEnter.forEach(function (peerId) {
            if (peerId !== exceptPeerId) {
              _this18.connectToPeer(peerId, false);
            }
          });
        }
      }, {
        key: "setupListenerForConnection",
        value: function setupListenerForConnection(conn) {
          var _this19 = this;

          /**
           * Event is raised when the connection between us and the other peer is opened.
           * Note: We can send message to that peer now and they'll receive it. BUT
           * if their connection to us hasn't opened, they cannot send message to us
           */
          conn.on("open"
          /* Open */
          , function () {
            _this19.handleConnectionOpened(conn);
          });
          /**
           * Subscribe to receive messages from other peers
           */

          conn.on("data"
          /* Data */
          , function (message) {
            return _this19.handleMessageFromPeer(message, conn);
          });
          /**
           * Event is raised when either us or other peers close the connection
           */

          conn.on("close"
          /* Close */
          , function () {
            return _this19.handleConnectionClose(conn);
          });
          /**
           * Event is raised when there is an error
           */

          conn.on("error"
          /* Error */
          , function (error) {
            console.error(error);
          });
        }
        /**
         * This function is called when the connection between us and a peer is opened
         */

      }, {
        key: "handleConnectionOpened",
        value: function handleConnectionOpened(conn) {
          console.log('Connection to peer ' + conn.peer + ' opened :)');
          var myName = this.nameService.getPeerName(this.peer.id);
          this.broadcastService.sendNameAndCursorInfo(conn, myName); // Only add this connection to our list when it has been opened!

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].addUniqueConnections([conn], this.connectionsIAmHolding);

          var needToSendOldData = _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].inArray(conn.peer, this.peerIdsToSendOldCrdtsAndOldChatMessages);

          if (needToSendOldData) {
            // Broadcast new CRDTs, new chat messages and other changes to this new peer until we are sure he
            // has received all oldCRDTs and has connected to the rest in room
            this.newlyJoinedConnsNeededBroadcasting.push(conn);
            this.broadcastService.sendOldData(conn, this.previousChatMessages, this.editorService.getOldCRDTsAsSortedArray());
            this.peerIdsToSendOldCrdtsAndOldChatMessages = this.peerIdsToSendOldCrdtsAndOldChatMessages.filter(function (id) {
              return id !== conn.peer;
            });
          }

          var askForOldData = this.connToGetOldMessages === conn;

          if (askForOldData) {
            this.broadcastService.requestOldMessages(conn, 4
            /* RequestOldCRDTsAndChatMessages */
            );
          } // If we just join room (this peer is here before us) and are ready (have received all CRDTs and Chat Messages)


          var justJoinRoomAndAreReady = this.peerIdsInRoomWhenFirstEnter.find(function (id) {
            return id === conn.peer;
          }) && this.hasReceivedAllOldCRDTs && this.hasReceivedOldChatMessages;

          if (justJoinRoomAndAreReady) {
            conn.send(new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](null, 16
            /* CanDisplayMeJustJoinRoom */
            , this.peer.id));
          }
        }
        /**
         * Is called when a peer send us a message
         * Note: PeerUtils.announceInfo() is to notify code-editor.component.ts
         */

      }, {
        key: "handleMessageFromPeer",
        value: function handleMessageFromPeer(message, fromConn) {
          if (this.needToBroadcastThisMessageToNewPeers(message)) {
            this.broadcastService.broadcastMessageToNewPeers(message, this.newlyJoinedConnsNeededBroadcasting);
          }

          switch (message.messageType) {
            /**
             * CRDT related requests
             */
            case 0
            /* RemoteInsert */
            :
            case 1
            /* RemoteRemove */
            :
            case 2
            /* OldCRDTs */
            :
            case 3
            /* OldCRDTsLastBatch */
            :
              // message.content will be empty when the peer send oldCRDT and the screen is empty
              if (message.content !== '') {
                this.handleCRDTMessage(message);
              }

              if (message.messageType === 3
              /* OldCRDTsLastBatch */
              ) {
                this.handleCRDTLastBatch(fromConn);
              }

              break;

            case 4
            /* RequestOldCRDTsAndChatMessages */
            :
              this.handleOldDataRequest(fromConn);
              break;
            // The peer we asked to send us oldCRDTs don't have them (They're new in room too)

            case 7
            /* CannotSendOldCRDTsOrOldChatMessages */
            :
              this.displayPeerCannotSendOldDataAndReload();
              break;

            /**
             * Handle Chat messages related requests
             */

            case 8
            /* ChatMessage */
            :
              this.storeAndDisplayChatMessage(message);
              break;

            case 9
            /* OldChatMessages */
            :
              this.hasReceivedOldChatMessages = true;
              this.storeAndDisplayOldChatMessages(message);
              break;

            /**
             * Change Cursor, Select, Name messages
             */

            case 12
            /* ChangeCursor */
            :
              this.updatePeerCursorPos(fromConn, message);
              break;

            case 13
            /* ChangeSelect */
            :
              this.updatePeerSelectionPos(fromConn, message);
              break;

            case 14
            /* CursorColor */
            :
              this.updatePeerColor(fromConn, message);
              break;

            case 15
            /* Name */
            :
              this.addNewPeerName(fromConn, message);
              break;

            /**
             * Other messages
             */
            // That peer has received all CRDTs. We can display their name now

            case 16
            /* CanDisplayMeJustJoinRoom */
            :
              // We will soon no longer need to broadcast that peer messages from other peers.
              // We give that peer a few seconds to connect to the rest in room
              this.stopBroadcastingAfter(fromConn, STOP_BROADCAST_AFTER_MILLI_SECONDS);
              this.alertPeerJoinRoom(fromConn);
              break;

            case 6
            /* ChangeLanguage */
            :
              var languageIsChanged = _editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"].currentLanguage !== message.content;
              var isDefaultLanguage = _editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"].currentLanguage === _editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"].defaultLanguage;

              if (languageIsChanged || isDefaultLanguage) {
                this.changeLanguageAndAlertThisChange(message);
              }

              break;

            case 17
            /* ChangeName */
            :
              this.changePeerNameAndAlertThisChange(message);
              break;

            default:
              console.log(message);
              throw new Error('Unhandled messageType');
          }
        }
      }, {
        key: "handleConnectionClose",
        value: function handleConnectionClose(conn) {
          console.log('Connection to ' + conn.peer + ' is closed. It will be deleted in the connectionsIAmHolding list!');
          this.stopBroadcastingAfter(conn, 0); // Delete conn from connectionsIAmHolding

          var index = this.connectionsIAmHolding.findIndex(function (connection) {
            return connection === conn;
          });
          this.connectionsIAmHolding.splice(index, 1); // Delete the peer's nameColor

          this.nameColorList = this.nameColorList.filter(function (x) {
            return x.ofPeerId !== conn.peer;
          }); // IMPORTANT: Must be after delete peer's nameColor
          // Delete the peer's cursor, select,...

          this.peerIdJustLeft = conn.peer;

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(9
          /* PeerLeft */
          ); // Tell user that the peer just left room


          var name = this.nameService.getPeerName(conn.peer);

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].alert(name + ' just left', _shared_AlertType__WEBPACK_IMPORTED_MODULE_9__["AlertType"].Warning);
        } //***************** Handle when join room *******************

      }, {
        key: "handleFirstJoinRoom",
        value: function handleFirstJoinRoom(peerIds, receivedAllMessages, cursorColors, cursorColor) {
          // Set peers-in-room's cursor colors
          for (var i = 0; i < peerIds.length; i++) {
            this.cursorService.setPeerColor(peerIds[i], cursorColors[i]);
          }

          this.cursorService.setMyCursorColorAndPeerId(this.peer.id, cursorColor);
          this.nameService.giveMyselfRandomName(this.peer.id);
          this.nameColorList.push(new _shared_NameColor__WEBPACK_IMPORTED_MODULE_11__["NameColor"](this.nameService.getPeerName(this.peer.id) + ' (You)', this.cursorService.getPeerColor(this.peer.id), this.peer.id));

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(10
          /* NewPeerJoining */
          );

          var iAmTheFirstInRoom = peerIds.length === 0;

          if (iAmTheFirstInRoom) {
            console.log('I am the first one in this room');
            this.hasReceivedAllOldCRDTs = true;
            this.hasReceivedOldChatMessages = true;
          } else {
            this.peerIdsInRoomWhenFirstEnter = peerIds; // We join an existing room => Pick a random peer to give us oldCRDTs, old chat messages

            var peerIdPicked = this.pickReadyPeerToGetAllMessages(peerIds, receivedAllMessages);

            if (peerIdPicked === null) {
              _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].handlePeerError('All people have left the room. Going back to Home page?');
            } else {
              this.connectToPeer(peerIdPicked, true); // Handle edge case: That peer leaves before finishing sending us oldCRDTs and old chat messages

              this.waitTillGotAllMessagesOrRefreshIfThatPeerLeft(peerIdPicked);
            }
          }
        }
        /**
         * Take info from C# server to determine which peer has received all CRDTs and chat messages
         * and which peer hasn't. Then pick a random, 'ready' peer
         */

      }, {
        key: "pickReadyPeerToGetAllMessages",
        value: function pickReadyPeerToGetAllMessages(peerIds, receivedAllMessages) {
          var candidatePeerIds = [];

          for (var i = 0; i < receivedAllMessages.length; i++) {
            if (receivedAllMessages[i]) {
              candidatePeerIds.push(peerIds[i]);
            }
          }

          if (candidatePeerIds.length === 0) {
            return null;
          } else {
            var randIndex = Math.floor(Math.random() * candidatePeerIds.length);
            return candidatePeerIds[randIndex];
          }
        }
        /**
         * If the peer hasn's finished sending us oldCRDTs, asking C# server
         * every 3 seconds to see if that peer has left. Refresh if he has left to rejoin room
         */

      }, {
        key: "waitTillGotAllMessagesOrRefreshIfThatPeerLeft",
        value: function waitTillGotAllMessagesOrRefreshIfThatPeerLeft(peerIdToGetAllMessages) {
          var _this20 = this;

          if (!this.hasReceivedAllOldCRDTs) {
            this.roomService.getPeerIdsInRoom(this.roomName).subscribe(function (peerIds) {
              if (peerIds.findIndex(function (id) {
                return id === peerIdToGetAllMessages;
              }) === -1) {
                console.log('The peer we intended to get old messages from just left the room. Refreshing...');
                window.location.reload(true);
              } else {
                var that = _this20;
                setTimeout(function () {
                  that.waitTillGotAllMessagesOrRefreshIfThatPeerLeft(peerIdToGetAllMessages);
                }, 3000);
              }
            });
          }
        }
      }, {
        key: "updateNameColorList",
        value: function updateNameColorList(peerId, newName) {
          var nameColorIndex = this.nameColorList.findIndex(function (elem) {
            return elem.ofPeerId === peerId;
          });
          this.nameColorList[nameColorIndex].name = newName;
        } //*************************************************************

      }, {
        key: "createNewRoom",
        value: function createNewRoom() {
          var _this21 = this;

          this.roomService.joinNewRoom(this.peer.id).subscribe(function (data) {
            _this21.roomName = data.roomName;

            _editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"].setSiteId(data.siteId);

            _this21.handleFirstJoinRoom([], [], [], data.cursorColor);

            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(1
            /* RoomName */
            );

            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(6
            /* ReadyToDisplayMonaco */
            );
          });
        }
      }, {
        key: "joinExistingRoom",
        value: function joinExistingRoom(roomName) {
          var _this22 = this;

          this.roomName = roomName;
          this.roomService.joinExistingRoom(this.peer.id, this.roomName).subscribe(function (data) {
            if (data.siteId === -1) {
              _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].handlePeerError('Room not exists! Going back to Home page?');
            }

            _editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"].setSiteId(data.siteId); // SQL server doesn't have bool. We have to use 1 and 0. Mapping 1 and 0 back to bool


            var boolArrHasReceivedAllMessages = data.hasReceivedAllMessages.map(function (num) {
              return num === 0 ? false : true;
            });

            _this22.handleFirstJoinRoom(data.peerIds, boolArrHasReceivedAllMessages, data.cursorColors, data.cursorColor);
          }, function (error) {
            console.error(error);
          });
        }
      }, {
        key: "getPeerIdJustLeft",
        value: function getPeerIdJustLeft() {
          return this.peerIdJustLeft;
        }
      }, {
        key: "getAllMessages",
        value: function getAllMessages() {
          return this.previousChatMessages;
        }
      }, {
        key: "getSelectionChangeInfo",
        value: function getSelectionChangeInfo() {
          return this.selectionChangeInfo;
        }
      }, {
        key: "getCursorChangeInfo",
        value: function getCursorChangeInfo() {
          return this.cursorChangeInfo;
        }
      }, {
        key: "getReceivedRemoteCrdts",
        value: function getReceivedRemoteCrdts() {
          return this.receivedRemoteCrdts;
        }
      }, {
        key: "getPeerIdWhoSentCrdts",
        value: function getPeerIdWhoSentCrdts() {
          return this.peerIdWhoSentCrdts;
        }
      }, {
        key: "getMyPeerId",
        value: function getMyPeerId() {
          return this.peer.id;
        }
      }, {
        key: "getRoomName",
        value: function getRoomName() {
          return this.roomName;
        }
      }, {
        key: "getAllPeerIds",
        value: function getAllPeerIds() {
          var peerIdsInRoom = this.connectionsIAmHolding.map(function (conn) {
            return conn.peer;
          });

          if (this.peer) {
            peerIdsInRoom.push(this.peer.id);
          }

          return peerIdsInRoom;
        }
      }, {
        key: "getNameColorList",
        value: function getNameColorList() {
          return this.nameColorList;
        }
      }, {
        key: "sendMessage",
        value: function sendMessage(content) {
          this.broadcastService.broadcastChatMessage(content, this.connectionsIAmHolding, this.previousChatMessages);
        }
      }, {
        key: "broadcastChangeCursorPos",
        value: function broadcastChangeCursorPos(event) {
          this.broadcastService.broadcastChangeCursorPos(event, this.connectionsIAmHolding);
        }
      }, {
        key: "broadcastChangeSelectionPos",
        value: function broadcastChangeSelectionPos(event) {
          this.broadcastService.broadcastChangeSelectionPos(event, this.connectionsIAmHolding);
        }
      }, {
        key: "broadcastChangeLanguage",
        value: function broadcastChangeLanguage() {
          this.broadcastService.broadcastChangeLanguage(this.connectionsIAmHolding);
        }
      }, {
        key: "broadcastChangeName",
        value: function broadcastChangeName(newName) {
          this.broadcastService.broadcastChangeName(this.connectionsIAmHolding, newName);
        }
        /**
         * When a peer just join room and ask us to send OldCRDTs, he is not yet connected to
         * the rest in room. If any peer in room send a message, he will not receive it.
         * To fix this problem, we broadcast any new messages to him.
         *
         * This function is called when that new peer is almost 'ready'. He has received oldCRDTs
         * and are connecting to the rest in room. We allow him a few seconds before we stop broadcasting.
         *
         * Note: Of course we still broadcast message from us to him.
         */

      }, {
        key: "stopBroadcastingAfter",
        value: function stopBroadcastingAfter(conn, milliSecondsLater) {
          var that = this;
          setTimeout(function () {
            that.newlyJoinedConnsNeededBroadcasting = that.newlyJoinedConnsNeededBroadcasting.filter(function (connection) {
              return connection.peer !== conn.peer;
            });
          }, milliSecondsLater);
        }
      }, {
        key: "getMyName",
        value: function getMyName() {
          return this.nameService.getPeerName(this.peer.id);
        }
      }, {
        key: "changeMyName",
        value: function changeMyName(newName) {
          this.nameService.setPeerName(this.peer.id, newName);
          this.updateNameColorList(this.peer.id, newName + ' (You)');

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(14
          /* ChangeMyName */
          );
        }
      }, {
        key: "handleCRDTMessage",
        value: function handleCRDTMessage(message) {
          var crdts = _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["CrdtUtils"].stringToCRDTArr(message.content, _broadcast_service__WEBPACK_IMPORTED_MODULE_12__["BroadcastService"].CRDTDelimiter);

          this.receivedRemoteCrdts = crdts;
          this.peerIdWhoSentCrdts = message.fromPeerId;

          if (message.messageType === 0
          /* RemoteInsert */
          ) {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(2
            /* RemoteInsert */
            );
          } else if (message.messageType === 1
          /* RemoteRemove */
          ) {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(3
            /* RemoteRemove */
            );
          } else {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(4
            /* RemoteAllMessages */
            );
          }
        }
      }, {
        key: "handleCRDTLastBatch",
        value: function handleCRDTLastBatch(fromConn) {
          this.hasReceivedAllOldCRDTs = true;

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(6
          /* ReadyToDisplayMonaco */
          );

          this.connectToTheRestInRoom(this.connToGetOldMessages.peer); // Tell C# Server I have received all CRDTs

          this.roomService.markPeerReceivedAllMessages(this.peer.id); // Send cursor + selection change info

          this.broadcastService.sendCursorInfo(fromConn); // Tell that user they can display us just join room now

          fromConn.send(new _shared_Message__WEBPACK_IMPORTED_MODULE_2__["Message"](null, 16
          /* CanDisplayMeJustJoinRoom */
          , this.peer.id));
        }
      }, {
        key: "handleOldDataRequest",
        value: function handleOldDataRequest(fromConn) {
          var canSend = this.hasReceivedAllOldCRDTs && this.hasReceivedOldChatMessages;

          if (!canSend) {
            this.broadcastService.tellPeerCannotSendOldData(fromConn);
          } else {
            // Only send when connection has opened
            if (!_shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].connectionHasOpened(fromConn, this.connectionsIAmHolding)) {
              this.peerIdsToSendOldCrdtsAndOldChatMessages.push(fromConn.peer); // Send when opened
            } else {
              // Broadcast new CRDTs, new chat messages to this new peer until we are sure he
              // has received all oldCRDTs and has connected to the rest in room
              this.newlyJoinedConnsNeededBroadcasting.push(fromConn);
              this.broadcastService.sendOldData(fromConn, this.previousChatMessages, this.editorService.getOldCRDTsAsSortedArray()); // Send now
            }
          }
        }
      }, {
        key: "displayPeerCannotSendOldDataAndReload",
        value: function displayPeerCannotSendOldDataAndReload() {
          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].alert('The peer we picked to send us old messages cannot send. Reloading...', _shared_AlertType__WEBPACK_IMPORTED_MODULE_9__["AlertType"].Error);

          window.location.reload(true);
        }
      }, {
        key: "storeAndDisplayChatMessage",
        value: function storeAndDisplayChatMessage(message) {
          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].addUniqueMessages([message], this.previousChatMessages);

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(0
          /* UpdateChatMessages */
          );
        }
      }, {
        key: "storeAndDisplayOldChatMessages",
        value: function storeAndDisplayOldChatMessages(message) {
          var messages = JSON.parse(message.content);

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].addUniqueMessages(messages, this.previousChatMessages);

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(0
          /* UpdateChatMessages */
          );
        }
      }, {
        key: "updatePeerCursorPos",
        value: function updatePeerCursorPos(fromConn, message) {
          var cursorEvent = JSON.parse(message.content);
          this.cursorChangeInfo = new _shared_CursorChangeInfo__WEBPACK_IMPORTED_MODULE_6__["CursorChangeInfo"](cursorEvent.position.lineNumber, cursorEvent.position.column, fromConn.peer, cursorEvent.source, cursorEvent.reason);

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(7
          /* CursorChange */
          );
        }
      }, {
        key: "updatePeerSelectionPos",
        value: function updatePeerSelectionPos(fromConn, message) {
          var selectEvent = JSON.parse(message.content);
          this.selectionChangeInfo = new _shared_SelectionChangeInfo__WEBPACK_IMPORTED_MODULE_7__["SelectionChangeInfo"](selectEvent.selection.startLineNumber, selectEvent.selection.startColumn, selectEvent.selection.endLineNumber, selectEvent.selection.endColumn, fromConn.peer, selectEvent.source, selectEvent.reason);

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(8
          /* SelectionChange */
          );
        }
      }, {
        key: "updatePeerColor",
        value: function updatePeerColor(fromConn, message) {
          var color = Number.parseInt(message.content, 10);
          this.cursorService.setPeerColor(fromConn.peer, color);

          if (this.nameService.getPeerName(fromConn.peer)) {
            // Have both name and color => Add to list
            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].addUniqueNameColor(new _shared_NameColor__WEBPACK_IMPORTED_MODULE_11__["NameColor"](this.nameService.getPeerName(fromConn.peer), this.cursorService.getPeerColor(fromConn.peer), fromConn.peer), this.nameColorList);
          }
        }
      }, {
        key: "addNewPeerName",
        value: function addNewPeerName(fromConn, message) {
          var peerName = message.content;
          this.nameService.setPeerName(fromConn.peer, peerName);

          if (this.cursorService.getPeerColor(fromConn.peer)) {
            // Have both name and color => Add to list
            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].addUniqueNameColor(new _shared_NameColor__WEBPACK_IMPORTED_MODULE_11__["NameColor"](this.nameService.getPeerName(fromConn.peer), this.cursorService.getPeerColor(fromConn.peer), fromConn.peer), this.nameColorList);
          }
        }
      }, {
        key: "alertPeerJoinRoom",
        value: function alertPeerJoinRoom(fromConn) {
          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(10
          /* NewPeerJoining */
          );

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].alert(this.nameService.getPeerName(fromConn.peer) + ' just joined room', _shared_AlertType__WEBPACK_IMPORTED_MODULE_9__["AlertType"].Success);
        }
      }, {
        key: "changeLanguageAndAlertThisChange",
        value: function changeLanguageAndAlertThisChange(message) {
          _editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"].currentLanguage = message.content;

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(5
          /* ChangeLanguage */
          );

          _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].alert('Language has been changed to ' + _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].getLanguageName(message.content), _shared_AlertType__WEBPACK_IMPORTED_MODULE_9__["AlertType"].Message);
        }
      }, {
        key: "changePeerNameAndAlertThisChange",
        value: function changePeerNameAndAlertThisChange(message) {
          var fromPeerId = message.fromPeerId;
          var oldName = this.nameService.getPeerName(fromPeerId);
          var newName = message.content;

          if (oldName !== newName) {
            this.nameService.setPeerName(fromPeerId, newName);
            this.updateNameColorList(fromPeerId, newName);

            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["PeerUtils"].announceInfo(13
            /* ChangePeerName */
            );

            _shared_Utils__WEBPACK_IMPORTED_MODULE_5__["Utils"].alert(oldName + ' has changed their name to ' + newName, _shared_AlertType__WEBPACK_IMPORTED_MODULE_9__["AlertType"].Message);
          }
        }
      }, {
        key: "needToBroadcastThisMessageToNewPeers",
        value: function needToBroadcastThisMessageToNewPeers(message) {
          return message.messageType === 0
          /* RemoteInsert */
          || message.messageType === 1
          /* RemoteRemove */
          || message.messageType === 8
          /* ChatMessage */
          || message.messageType === 6
          /* ChangeLanguage */
          || message.messageType === 17
          /* ChangeName */
          ;
        }
        /**
         *   Broadcast CRDTs to all peers when local insert / remove
         */

      }, {
        key: "subscribeToEditorServiceEvents",
        value: function subscribeToEditorServiceEvents() {
          var _this23 = this;

          this.editorService.crdtEvent.subscribe(function (insert) {
            if (insert) {
              _this23.broadcastService.broadcastInsertOrRemove(_this23.editorService.getCrdtsToTransfer(), true, _this23.connectionsIAmHolding);
            } else {
              _this23.broadcastService.broadcastInsertOrRemove(_this23.editorService.getCrdtsToTransfer(), false, _this23.connectionsIAmHolding);
            }
          });
        }
      }]);

      return PeerService;
    }();

    PeerService.ctorParameters = function () {
      return [{
        type: _room_service__WEBPACK_IMPORTED_MODULE_3__["RoomService"]
      }, {
        type: _cursor_service__WEBPACK_IMPORTED_MODULE_8__["CursorService"]
      }, {
        type: _editor_service__WEBPACK_IMPORTED_MODULE_4__["EditorService"]
      }, {
        type: _name_service__WEBPACK_IMPORTED_MODULE_10__["NameService"]
      }, {
        type: _broadcast_service__WEBPACK_IMPORTED_MODULE_12__["BroadcastService"]
      }, {
        type: _turnServerService__WEBPACK_IMPORTED_MODULE_14__["TurnServerService"]
      }];
    };

    PeerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PeerService);
    /***/
  },

  /***/
  "./src/app/services/room.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/room.service.ts ***!
    \******************************************/

  /*! exports provided: RoomService */

  /***/
  function srcAppServicesRoomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoomService", function () {
      return RoomService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/Utils */
    "./src/app/shared/Utils.ts");
    /* harmony import */


    var _shared_AlertType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../shared/AlertType */
    "./src/app/shared/AlertType.ts");

    var RoomService =
    /*#__PURE__*/

    /**
     * This class communicate with our C# API
     */
    function () {
      function RoomService(http) {
        _classCallCheck(this, RoomService);

        this.http = http;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + 'Room/';
        this.peerServerUrl = 'https://' + src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].peerServerHost;
        this.HTTP_OPTIONS = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(RoomService, [{
        key: "connectServer",
        value: function connectServer() {
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].connection);
        }
      }, {
        key: "joinNewRoom",
        value: function joinNewRoom(peerId) {
          return this.http.get(this.apiURL + 'JoinNewRoom?peerId=' + peerId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "joinExistingRoom",
        value: function joinExistingRoom(peerId, roomName) {
          return this.http.get(this.apiURL + 'JoinExistingRoom?peerId=' + peerId + '&roomName=' + roomName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "getPeerIdsInRoom",
        value: function getPeerIdsInRoom(roomName) {
          return this.http.get(this.apiURL + 'GetPeerIdsInRoom?roomName=' + roomName).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
        }
      }, {
        key: "markPeerReceivedAllMessages",
        value: function markPeerReceivedAllMessages(peerId) {
          return this.http.post(this.apiURL + 'MarkPeerReceivedAllMessages', {
            val: peerId
          }, this.HTTP_OPTIONS).subscribe(function (data) {}, function (error) {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_6__["Utils"].alert('Something went wrong. Please join room again!', _shared_AlertType__WEBPACK_IMPORTED_MODULE_7__["AlertType"].Error);
          });
        }
      }, {
        key: "sendDummyRequestToKeepPeerServerAlive",
        value: function sendDummyRequestToKeepPeerServerAlive() {
          this.http.get(this.peerServerUrl).subscribe(function () {});
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          var errorMessage = '';

          if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
          } else {
            errorMessage = 'Error from server!';
          }

          window.alert(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }
      }]);

      return RoomService;
    }();

    RoomService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    RoomService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })
    /**
     * This class communicate with our C# API
     */
    ], RoomService);
    /***/
  },

  /***/
  "./src/app/services/turnServerService.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/turnServerService.ts ***!
    \***********************************************/

  /*! exports provided: TurnServerService */

  /***/
  function srcAppServicesTurnServerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TurnServerService", function () {
      return TurnServerService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var TurnServerService =
    /*#__PURE__*/

    /**
     * This class communicate with our C# API
     */
    function () {
      function TurnServerService(http) {
        _classCallCheck(this, TurnServerService);

        this.http = http;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'turnServerToken/';
      }

      _createClass(TurnServerService, [{
        key: "getTurnStunToken",
        value: function getTurnStunToken() {
          return this.http.get(this.apiURL);
        }
      }]);

      return TurnServerService;
    }();

    TurnServerService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    TurnServerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })
    /**
     * This class communicate with our C# API
     */
    ], TurnServerService);
    /***/
  },

  /***/
  "./src/app/services/utils.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/utils.service.ts ***!
    \*******************************************/

  /*! exports provided: UtilsService */

  /***/
  function srcAppServicesUtilsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilsService", function () {
      return UtilsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/Utils */
    "./src/app/shared/Utils.ts");
    /* harmony import */


    var _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../shared/AlertType */
    "./src/app/shared/AlertType.ts");

    var UtilsService = /*#__PURE__*/function () {
      function UtilsService(http) {
        _classCallCheck(this, UtilsService);

        this.http = http;
        this.apiURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + 'Utilities/';
        this.HTTP_OPTIONS = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(UtilsService, [{
        key: "sendEmail",
        value: function sendEmail(email) {
          return this.http.post(this.apiURL + 'SendEmail', email, this.HTTP_OPTIONS).subscribe(function (data) {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].alert('Submit successfully', _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Success);
          }, function (error) {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].alert('Something went wrong. Please try again', _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error);
          });
        }
      }, {
        key: "sendFeedbackForm",
        value: function sendFeedbackForm(form) {
          return this.http.post(this.apiURL + 'SendFeedbackForm', form, this.HTTP_OPTIONS).subscribe(function (data) {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].alert('Submit successfully', _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Success);
          }, function (error) {
            _shared_Utils__WEBPACK_IMPORTED_MODULE_4__["Utils"].alert('Something went wrong. Please try again', _shared_AlertType__WEBPACK_IMPORTED_MODULE_5__["AlertType"].Error);
          });
        }
      }]);

      return UtilsService;
    }();

    UtilsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UtilsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilsService);
    /***/
  },

  /***/
  "./src/app/shared/AlertType.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/AlertType.ts ***!
    \*************************************/

  /*! exports provided: AlertType */

  /***/
  function srcAppSharedAlertTypeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertType", function () {
      return AlertType;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AlertType;

    (function (AlertType) {
      AlertType[AlertType["Success"] = 0] = "Success";
      AlertType[AlertType["Warning"] = 1] = "Warning";
      AlertType[AlertType["Error"] = 2] = "Error";
      AlertType[AlertType["Message"] = 3] = "Message";
    })(AlertType || (AlertType = {}));
    /***/

  },

  /***/
  "./src/app/shared/BalancedBST.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/BalancedBST.ts ***!
    \***************************************/

  /*! exports provided: BalancedBST */

  /***/
  function srcAppSharedBalancedBSTTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BalancedBST", function () {
      return BalancedBST;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Order-statistic, balanced BST. This BST allows NO DUPLICATE.
     * Return -1 if insert duplicate element!
     */


    var BalancedBST = /*#__PURE__*/function () {
      function BalancedBST() {
        _classCallCheck(this, BalancedBST);

        this.root = null;
        this.size = 0;
      }
      /**
       * Return inserted index
       */


      _createClass(BalancedBST, [{
        key: "insert",
        value: function insert(data) {
          if (this.isEmpty()) {
            this.root = new Node(data, null);
            this.size++;
            return 0;
          }

          this.size++;
          var node = this.root;

          while (true) {
            if (data.compareTo(node.data) === 0) {
              // No duplicate elements
              return -1;
            } else if (data.compareTo(node.data) < 0) {
              // Go left
              if (node.left === null) {
                node.left = new Node(data, node);
                this.incrementAllAncestorsSize(node.left);
                this.goUpRebalanceAndUpdateHeightBFAndSubtreeSize(node);
                return this.getIndex(data);
              } else {
                node = node.left;
              }
            } else {
              // Go right
              if (node.right === null) {
                node.right = new Node(data, node);
                this.incrementAllAncestorsSize(node.right);
                this.goUpRebalanceAndUpdateHeightBFAndSubtreeSize(node);
                return this.getIndex(data);
              } else {
                node = node.right;
              }
            }
          }
        }
        /**
         * Return removed index
         */

      }, {
        key: "remove",
        value: function remove(data) {
          var nodeToRemove = this.find(data);

          if (!nodeToRemove) {
            return -1;
          }

          var returnIndex = this.getIndex(data);
          this.size--;
          this.removeHelper(nodeToRemove);
          return returnIndex;
        }
      }, {
        key: "removeHelper",
        value: function removeHelper(nodeToRemove) {
          // if nodeToRemove is a leaf
          if (!nodeToRemove.left && !nodeToRemove.right) {
            // and it is also the root
            if (!nodeToRemove.parent) {
              this.root = null;
            } else {
              this.decrementAllAncestorsSize(nodeToRemove);
              var parent = nodeToRemove.parent;

              if (parent.left === nodeToRemove) {
                parent.left = null;
              } else {
                parent.right = null;
              }

              this.goUpRebalanceAndUpdateHeightBFAndSubtreeSize(parent);
            }
          } else if (nodeToRemove.left && nodeToRemove.right) {
            // If has 2 children
            // Find left most node in right subtree
            var temp = nodeToRemove.right;

            while (temp.left) {
              temp = temp.left;
            } // temp is the left most node


            nodeToRemove.data = temp.data;
            this.removeHelper(temp);
          } else {
            // It has 1 children
            var _parent = nodeToRemove.parent; // If that is left child

            if (nodeToRemove.left) {
              // If nodeToRemove is the root
              if (!_parent) {
                nodeToRemove.left.parent = null;
                this.root = nodeToRemove.left;
              } else {
                this.decrementAllAncestorsSize(nodeToRemove);

                if (_parent.left === nodeToRemove) {
                  _parent.left = nodeToRemove.left;
                  nodeToRemove.left.parent = _parent;
                } else {
                  _parent.right = nodeToRemove.left;
                  nodeToRemove.left.parent = _parent;
                }

                this.goUpRebalanceAndUpdateHeightBFAndSubtreeSize(_parent);
              }
            } else {
              // It has right child
              // If nodeToRemove is the root
              if (!_parent) {
                nodeToRemove.right.parent = null;
                this.root = nodeToRemove.right;
              } else {
                this.decrementAllAncestorsSize(nodeToRemove);

                if (_parent.left === nodeToRemove) {
                  _parent.left = nodeToRemove.right;
                  nodeToRemove.right.parent = _parent;
                } else {
                  _parent.right = nodeToRemove.right;
                  nodeToRemove.right.parent = _parent;
                }

                this.goUpRebalanceAndUpdateHeightBFAndSubtreeSize(_parent);
              }
            }
          }
        }
        /**
         * Find node with the specified data
         */

      }, {
        key: "find",
        value: function find(data) {
          if (this.isEmpty()) {
            return null;
          }

          var node = this.root;

          while (node) {
            if (data.compareTo(node.data) === 0) {
              return node;
            } else if (data.compareTo(node.data) < 0) {
              node = node.left;
            } else {
              node = node.right;
            }
          } // Not found


          return null;
        }
        /**
         * Get index of the node with node.data === data
         */

      }, {
        key: "getIndex",
        value: function getIndex(data) {
          if (this.isEmpty()) {
            return -1;
          }

          var node = this.root;
          var index = 0;

          while (node) {
            if (data.compareTo(node.data) === 0) {
              // subtree of a leaf has size 0. subtree of null has size -1
              var leftSubtreeSize = node.left ? node.left.subtreeSize : -1;
              index += leftSubtreeSize + 1;
              return index;
            } else if (data.compareTo(node.data) < 0) {
              node = node.left;
            } else {
              var _leftSubtreeSize = node.left ? node.left.subtreeSize : -1;

              index += _leftSubtreeSize + 2;
              node = node.right;
            }
          } // Not found


          return -1;
        }
        /**
         * Get data at index
         */

      }, {
        key: "getDataAt",
        value: function getDataAt(index) {
          if (this.isEmpty() || index >= this.size) {
            return null;
          }

          var node = this.root;

          while (node) {
            var leftSubtreeSize = node.left ? node.left.subtreeSize : -1;

            if (index === leftSubtreeSize + 1) {
              return node.data;
            } else if (index <= leftSubtreeSize) {
              node = node.left;
            } else {
              index -= leftSubtreeSize + 2;
              node = node.right;
            }
          } // Weird. Something went wrong


          throw new Error('Something went wrong when getDataAt(index)');
        }
      }, {
        key: "toSortedArray",
        value: function toSortedArray() {
          var resArr = [];
          this.toSortedArrayInOrder(resArr, this.root);
          return resArr;
        }
      }, {
        key: "toSortedArrayInOrder",
        value: function toSortedArrayInOrder(resArr, curNode) {
          if (!curNode) {
            return;
          }

          this.toSortedArrayInOrder(resArr, curNode.left);
          resArr.push(curNode.data);
          this.toSortedArrayInOrder(resArr, curNode.right);
        }
        /**
         * AVL Tree
         */

      }, {
        key: "goUpRebalanceAndUpdateHeightBFAndSubtreeSize",
        value: function goUpRebalanceAndUpdateHeightBFAndSubtreeSize(node) {
          this.updateHeightBFAndSubtreeSize(node);
          var nodeIsRoot = node === this.root; // Rotate if needed
          // 1.Right heavy: Either RR or RL

          if (node.balancedFactor === 2) {
            // Must be RR
            if (node.bfRight() >= 0) {
              node = this.leftRotate(node);
            } else {
              // Must be RL
              this.rightRotate(node.right);
              node = this.leftRotate(node);
            }
          } // 2.Left heavy: Either LL or LR
          else if (node.balancedFactor === -2) {
            // Must be LL
            if (node.bfLeft() <= 0) {
              node = this.rightRotate(node);
            } else {
              this.leftRotate(node.left);
              node = this.rightRotate(node);
            }
          } // If we've reached the root


          if (nodeIsRoot) {
            this.root = node;
            this.updateHeightBFAndSubtreeSize(this.root);
            return;
          } else {
            // Go up and fix parent node
            this.goUpRebalanceAndUpdateHeightBFAndSubtreeSize(node.parent);
          }
        }
      }, {
        key: "updateHeightBFAndSubtreeSize",
        value: function updateHeightBFAndSubtreeSize(node) {
          node.height = Math.max(node.heightLeft(), node.heightRight()) + 1;
          node.balancedFactor = node.heightRight() - node.heightLeft();
          node.subtreeSize = node.subtreeSizeLeft() + node.subtreeSizeRight() + 2;
        }
      }, {
        key: "leftRotate",
        value: function leftRotate(node) {
          var nodeParent = node.parent;
          var x = node;
          var y = node.right;
          x.right = y.left;

          if (y.left) {
            y.left.parent = x;
          }

          x.parent = y;
          y.left = x;
          y.parent = nodeParent;

          if (nodeParent) {
            if (nodeParent.left === x) {
              nodeParent.left = y;
            } else {
              nodeParent.right = y;
            }
          }

          this.updateHeightBFAndSubtreeSize(x);
          this.updateHeightBFAndSubtreeSize(y);
          return y;
        }
      }, {
        key: "rightRotate",
        value: function rightRotate(node) {
          var nodeParent = node.parent;
          var x = node;
          var y = node.left;
          x.left = y.right;

          if (y.right) {
            y.right.parent = x;
          }

          y.right = x;
          x.parent = y;
          y.parent = nodeParent;

          if (nodeParent) {
            if (nodeParent.left === x) {
              nodeParent.left = y;
            } else {
              nodeParent.right = y;
            }
          }

          this.updateHeightBFAndSubtreeSize(x);
          this.updateHeightBFAndSubtreeSize(y);
          return y;
        }
      }, {
        key: "isBalance",
        value: function isBalance() {
          if (this.isEmpty()) {
            return true;
          }

          var q = new Queue();
          q.enqueue(this.root);

          while (!q.isEmpty()) {
            var node = q.dequeue();

            if (node.balancedFactor < -1 || node.balancedFactor > 1) {
              return false;
            }

            if (node.left) {
              q.enqueue(node.left);
            }

            if (node.right) {
              q.enqueue(node.right);
            }
          }

          return true;
        }
        /**
         *   Note: Slow, for testing purposes only. If you need height, simply return this.root.height + 1
         */

      }, {
        key: "getHeight",
        value: function getHeight() {
          if (this.isEmpty()) {
            return 0;
          }

          return this.findMaximumDepth(this.root);
        }
      }, {
        key: "findMaximumDepth",
        value: function findMaximumDepth(node) {
          if (!node) {
            return -1;
          }

          return Math.max(this.findMaximumDepth(node.left), this.findMaximumDepth(node.right)) + 1;
        }
      }, {
        key: "getSize",
        value: function getSize() {
          return this.size;
        }
      }, {
        key: "isEmpty",
        value: function isEmpty() {
          if (this.size === 0 !== (this.root === null)) {
            throw new Error('Tree size and root value are not on the same page!');
          }

          return this.size === 0;
        }
        /**
         * For testing purposes only
         */

      }, {
        key: "inorderToString",
        value: function inorderToString() {
          var res = [];
          this.inorderHelper(this.root, res);
          var stringRes = '';

          for (var i = 0; i < res.length; i++) {
            stringRes = stringRes + res[i] + '\n';
          }

          return stringRes;
        }
      }, {
        key: "inorderHelper",
        value: function inorderHelper(node, res) {
          if (!node) {
            return;
          }

          this.inorderHelper(node.left, res);
          res.push(node.data.toString());
          this.inorderHelper(node.right, res);
        }
        /**
         * For testing purposes only
         */

      }, {
        key: "printLevel",
        value: function printLevel() {
          if (this.isEmpty()) {
            return;
          }

          var res = '';
          var q = new Queue();
          q.enqueue(this.root);

          while (!q.isEmpty()) {
            var node = q.dequeue();
            res = res + node.data.toString() + '(Size:' + node.subtreeSize + ') ';

            if (node.left !== null) {
              q.enqueue(node.left);
            }

            if (node.right !== null) {
              q.enqueue(node.right);
            }
          }

          console.log('Print level by level: ' + res);
        }
      }, {
        key: "incrementAllAncestorsSize",
        value: function incrementAllAncestorsSize(node) {
          if (node === null) {
            throw new Error('Error: You should not call incrementAllAncestorsSize on a null node');
          }

          while (node.parent !== null) {
            node = node.parent;
            node.subtreeSize++;
          }
        }
      }, {
        key: "decrementAllAncestorsSize",
        value: function decrementAllAncestorsSize(node) {
          if (node === null) {
            throw new Error('Error: You should not call incrementAllAncestorsSize on a null node');
          }

          while (node.parent !== null) {
            node = node.parent;
            node.subtreeSize--;
          }
        }
      }]);

      return BalancedBST;
    }();

    var Node = /*#__PURE__*/function () {
      function Node(data, parent) {
        _classCallCheck(this, Node);

        this.data = data;
        this.left = null;
        this.right = null;
        this.parent = parent;
        this.subtreeSize = 0;
        this.height = 0;
        this.balancedFactor = 0;
      }

      _createClass(Node, [{
        key: "heightLeft",
        value: function heightLeft() {
          return this.left ? this.left.height : -1;
        }
      }, {
        key: "heightRight",
        value: function heightRight() {
          return this.right ? this.right.height : -1;
        }
      }, {
        key: "bfLeft",
        value: function bfLeft() {
          return this.left ? this.left.balancedFactor : 0;
        }
      }, {
        key: "bfRight",
        value: function bfRight() {
          return this.right ? this.right.balancedFactor : 0;
        }
      }, {
        key: "subtreeSizeLeft",
        value: function subtreeSizeLeft() {
          return this.left ? this.left.subtreeSize : -1;
        }
      }, {
        key: "subtreeSizeRight",
        value: function subtreeSizeRight() {
          return this.right ? this.right.subtreeSize : -1;
        }
      }]);

      return Node;
    }();
    /**
     * A naive implementation of Queue. For testing purposes only
     */


    var Queue = /*#__PURE__*/function () {
      function Queue() {
        _classCallCheck(this, Queue);

        this.list = new Array();
      }

      _createClass(Queue, [{
        key: "isEmpty",
        value: function isEmpty() {
          return this.list.length === 0;
        }
      }, {
        key: "enqueue",
        value: function enqueue(data) {
          this.list.push(data);
        }
      }, {
        key: "dequeue",
        value: function dequeue() {
          if (this.isEmpty()) {
            throw new Error('The queue is empty!');
          }

          return this.list.shift();
        }
      }]);

      return Queue;
    }();
    /***/

  },

  /***/
  "./src/app/shared/CRDT.ts":
  /*!********************************!*\
    !*** ./src/app/shared/CRDT.ts ***!
    \********************************/

  /*! exports provided: CRDT, CRDTId, Identifier */

  /***/
  function srcAppSharedCRDTTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CRDT", function () {
      return CRDT;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CRDTId", function () {
      return CRDTId;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Identifier", function () {
      return Identifier;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _CustomNumber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./CustomNumber */
    "./src/app/shared/CustomNumber.ts"); // IMPORTANT: Start CRDT arr with <1, ServerID> and end with <INF, ServerID>. ServerID = 0
    //                                 ^ (not 0)
    // Start CRDT arr with <0, ServerID> will make the program crash in some edge cases

    /**
     * Each CRDT object will correspond to 1 character in the text editor
     * A sorted (increasing order) CRDT array will correspond to the whole text
     */


    var CRDT = /*#__PURE__*/function () {
      function CRDT(character, id) {
        _classCallCheck(this, CRDT);

        this.ch = character;
        this.id = id;
      }
      /**
       * Return CRDT object from toString() version of CRDT
       */


      _createClass(CRDT, [{
        key: "toString",
        value: function toString() {
          return this.id.toString() + this.ch;
        } // Compare CRDT by its id

      }, {
        key: "compareTo",
        value: function compareTo(other) {
          return this.id.compareTo(other.id);
        }
      }], [{
        key: "parse",
        value: function parse(crdtStr) {
          var tokens = crdtStr.split('');
          tokens.shift(); // Get char

          var ch = String(tokens.pop()); // Get clock value

          var clockArr = [];
          var i = tokens.length - 2;

          while (i > 0) {
            if (tokens[i] === '>') {
              break;
            }

            clockArr.unshift(tokens[i]);
            i--;
          }

          var clockValue = Number(clockArr.join(''));
          tokens = tokens.slice(0, i + 1); // Get identifiers

          var identifiers = new Array();
          var beg = 0;
          var end = 0;

          while (end < tokens.length) {
            if (tokens[end] === '>') {
              var tempArr = tokens.slice(beg + 1, end);
              var identifierStr = tempArr.join('');
              var identifierNums = identifierStr.split(',');
              var identifier = new Identifier(Number(identifierNums[0]), Number(identifierNums[1]));
              identifiers.push(identifier);
              end++;
              beg = end;
            }

            end++;
          }

          var crdtId = new CRDTId(identifiers, clockValue);
          var crdt = new CRDT(ch, crdtId);
          return crdt;
        }
      }]);

      return CRDT;
    }();
    /**
     * CRDTId is equivalent to position identifier in Logoot paper page 4 definition 1
     */


    var CRDTId = /*#__PURE__*/function () {
      function CRDTId(identifierArr, clock) {
        _classCallCheck(this, CRDTId);

        this.arr = identifierArr;
        this.clockValue = clock;
      }

      _createClass(CRDTId, [{
        key: "toString",
        value: function toString() {
          var description = '<';

          for (var i = 0; i < this.arr.length; i++) {
            description = description + this.arr[i].toString();
          }

          description = description + this.clockValue + '>';
          return description;
        }
        /**
         * Compare 2 identifier arrays from left to right. Terminate if one identifier is bigger than the other
         * If one array runs out of length, the longer is the bigger
         */

      }, {
        key: "compareTo",
        value: function compareTo(other) {
          var length1 = this.arr.length;
          var length2 = other.arr.length;
          var smallerLength = Math.min(length1, length2);

          for (var i = 0; i < smallerLength; i++) {
            if (this.arr[i].compareTo(other.arr[i]) === 0) {
              continue;
            } else {
              return this.arr[i].compareTo(other.arr[i]);
            }
          }

          if (length1 === length2) {
            // This rarely, rarely happens
            return this.clockValue - other.clockValue;
          }

          return length1 - length2;
        }
      }], [{
        key: "deepCopy",
        value: function deepCopy(crdtId) {
          var deepCopiedArr = [];

          for (var i = 0; i < crdtId.arr.length; i++) {
            deepCopiedArr.push(Identifier.deepCopy(crdtId.arr[i]));
          }

          return new CRDTId(deepCopiedArr, crdtId.clockValue);
        }
        /**
         * Generate N globally unique CRDTs between id1 and id2
         */

      }, {
        key: "generateNPositionsBetween",
        value: function generateNPositionsBetween(id1, id2, N, siteId, clock) {
          /**
           * A few things to keep in mind before you read this function:
           * 0/ Reading this research paper helps: https://hal.inria.fr/inria-00432368/document (Especially page 4)
           *
           * 1/ A CRDT looks like <<3,4><5,6>9>a where <3,4><5,6> is CRDTId, 9 is clock number and 'a' is a character
           *
           * 2/ A CRDTId is an array of identifiers. Each identifier looks like <800,951> where (800) is digit and (951) is siteId
           * To compare 2 identifiers, we first compare its digit (800). If digits are equal, compare its siteId (951)
           * To compare 2 CRDTIds, we compare each corresponding identifiers, left to right:
           * - The CRDTId contains the first bigger identifier is bigger
           * - If the corresponding identifiers are all equal, the longer CRDTId is bigger
           * - If the identifier arrays are exactly the same, compare the clock
           * Ex: <3,4> is bigger than <1,4><99,9><9999,99> because <3,4> is bigger than <1,4>
           * Ex: <3,4><9,9> is bigger than <3,4> because all corresponding identifiers are equal but the first CRDTId is longer
           *
           * 3/ You might find 'digit' (800) rather strange. Remember each 'digit' is a digit of a CustomNumber with base Math.pow(2, 25)
           *
           * 4/ To compare 2 CRDTs, we compare their CRDTIds
           */

          /**
           * Rough idea of this function:
           * GOAL: We need to generate N spots between id1 and id2
           *
           * - Step 1: + Take the first few digits of each identifiers of id1 and id2, map them into 2 CustomNumbers (prefix1 and prefix2).
           * + 'The first few' has to be 'enough' so that delta = prefix1 - prefix2 has enough spots for N elements.
           * + If we took all digits and delta is still not big enough, keep adding MAX_DIGIT (CustomNumber.BASE-1) to the back of
           * prefix1 and prefix2 until delta is big enough
           * + Note: If id2 > id1 because a siteId of an identifier of id2 is bigger,
           * then we don't need to find delta this way. Why? Please read the code and comments below
           *
           * - Step 2: + Now, let's say N = 10 and delta (in base 10 - for illustration purposes) = 100 => we need to allocate 10 positions and
           * we have 99 spots (#spots = delta - 1. Ex: 9-5 = 4, we have 3 spots: 6, 7, 8)
           * + Let step = 99 / 10 = 9. Then 10 CRDTIds's digits can be 11, 20, 29,... 92
           *
           * - Step 3: Contruct CRDTIds from these digits using constructPosition(), we get 10 CRDTIds.
           */

          /**
           * Step 1: Find prefix1, prefix2 and delta
           */
          var index = 0;
          var shorterLength = Math.min(id1.arr.length, id2.arr.length); // Find the first different identifier

          while (index < shorterLength) {
            if (id1.arr[index].compareTo(id2.arr[index]) !== 0) {
              // First time not match
              break;
            }

            index++;
          }

          var prefix1;
          var prefix2;
          var delta = new _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"]([0]);

          var NPlus1InBaseBASE = _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].decimalToCustomNumber(N + 1);

          var NInBaseBASE = _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].decimalToCustomNumber(N); // If id2 > id1 because id2 is longer OR a digit is bigger


          if (index === shorterLength || id1.arr[index].digit !== id2.arr[index].digit) {
            index--; // loop until delta >= N + 1, so that we have at least N spots

            while (delta.compareTo(NPlus1InBaseBASE) < 0) {
              index++;
              prefix1 = CRDTId.prefix(id1, index);
              prefix2 = CRDTId.prefix(id2, index);
              delta = _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].subtractGreaterThan(prefix2, prefix1);
            }
          } // If id2 > id1 because a siteId is bigger
          else {
            // id1 = <1, 1>...
            // id2 = <1, 3>...
            // If newId = <1, 1>..., newId will always < id2 because siteId 1 is less than siteId 3
            // With this guarantee, we now only need to find newId = <1, 1>... such that newId > id1. Below is how
            prefix2 = CRDTId.prefix(id2, index); // Keep adding MAX_DIGIT to the back of prefix2 until we have enough spots between prefix1 and prefix2
            // Why adding MAX_DIGIT? Because keep adding MAX_DIGIT guarantees we'll eventually have something > prefix1 enough,
            // and also, prefix2 will always < id2 because of the reason above

            while (delta.compareTo(NPlus1InBaseBASE) < 0) {
              index++;
              prefix1 = CRDTId.prefix(id1, index);
              prefix2.arr.push(_CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].BASE - 1); // Add max digit (in base 10, that would be 9) to the end of prefix2

              delta = _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].subtractGreaterThan(prefix2, prefix1);
            }
          }
          /**
           * Step 2: Generate N CRDTIds digits
           * and Step 3: create N CRDTIds from these digits
           */


          var step = _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].naiveFloorDivide(_CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].subtractGreaterThan(delta, new _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"]([1])), NInBaseBASE);

          var r = prefix1;
          var CRDTIdList = new Array();
          /**
           * Continue with the example above: when N = 10, delta = 100 and step = 10, we don't want to place CRDTIds too evenly
           * because the majority of the time, we insert text to the right side of the last inserted character
           * We want our 'CRDTIds' to look like 13, 16, 18, 20, 26,... so we still have 'spots' if we want to insert some more
           * without having to grow our Identifier array
           */

          for (var i = 0; i < N; i++) {
            var random1ToStepInclusive = _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].generateLessThan(_CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].add(step, new _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"]([1])));

            var crdtIdBetween = CRDTId.constructPosition(_CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].add(r, random1ToStepInclusive), id1, id2, siteId, clock++);
            CRDTIdList.push(crdtIdBetween);
            r = _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"].add(r, random1ToStepInclusive);
          }

          return CRDTIdList;
        }
        /**
         * Take the first 'index' + 1 digits, add 0 if not enough digits, and then convert to a CustomNumber
         */

      }, {
        key: "prefix",
        value: function prefix(id, index) {
          var num = index + 1;
          var numZerosToTheBack = num > id.arr.length ? num - id.arr.length : 0;
          var digitOnly = id.arr.map(function (i) {
            return i.digit;
          });
          var resultArr;

          if (id.arr.length < num) {
            resultArr = digitOnly.concat(new Array(numZerosToTheBack).fill(0));
          } else {
            resultArr = digitOnly.slice(0, num);
          }

          return new _CustomNumber__WEBPACK_IMPORTED_MODULE_1__["CustomNumber"](resultArr);
        }
        /**
         * Implement exactly as Logoot paper, bottom of page 4
         * Note: With this implementation, we can always get the siteId of the person
         * who created this character (It is the siteId of the last identifier)
         */

      }, {
        key: "constructPosition",
        value: function constructPosition(digits, id1, id2, siteId, clock) {
          var identifiersArray = new Array(digits.arr.length);

          for (var i = 0; i < identifiersArray.length; i++) {
            if (i === identifiersArray.length - 1) {
              identifiersArray[i] = new Identifier(digits.arr[i], siteId);
            } else if (id1.arr[i] && digits.arr[i] === id1.arr[i].digit) {
              // id1.arr[i] might not exist
              identifiersArray[i] = new Identifier(digits.arr[i], id1.arr[i].siteId);
            } else if (id2.arr[i] && digits.arr[i] === id2.arr[i].digit) {
              // id2.arr[i] might not exist
              identifiersArray[i] = new Identifier(digits.arr[i], id2.arr[i].siteId);
            } else {
              identifiersArray[i] = new Identifier(digits.arr[i], siteId);
            }
          }

          return new CRDTId(identifiersArray, clock);
        }
      }]);

      return CRDTId;
    }();

    var Identifier = /*#__PURE__*/function () {
      function Identifier(digit, siteId) {
        _classCallCheck(this, Identifier);

        this.digit = digit;
        this.siteId = siteId;
      }

      _createClass(Identifier, [{
        key: "compareTo",
        value:
        /**
         * Compare by digit. Use siteId to break tie
         */
        function compareTo(other) {
          if (this.digit === other.digit) {
            return this.siteId - other.siteId;
          }

          return this.digit - other.digit;
        }
      }, {
        key: "toString",
        value: function toString() {
          return '<' + this.digit + ',' + this.siteId + '>';
        }
      }], [{
        key: "deepCopy",
        value: function deepCopy(id) {
          return new Identifier(id.digit, id.siteId);
        }
      }]);

      return Identifier;
    }();
    /***/

  },

  /***/
  "./src/app/shared/CursorChangeInfo.ts":
  /*!********************************************!*\
    !*** ./src/app/shared/CursorChangeInfo.ts ***!
    \********************************************/

  /*! exports provided: CursorChangeInfo */

  /***/
  function srcAppSharedCursorChangeInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CursorChangeInfo", function () {
      return CursorChangeInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var CursorChangeInfo = /*#__PURE__*/_createClass(function CursorChangeInfo(line, col, peerId, source, reason) {
      _classCallCheck(this, CursorChangeInfo);

      this.line = line;
      this.col = col;
      this.peerId = peerId;
      this.source = source;
      this.reason = reason;
    });
    /***/

  },

  /***/
  "./src/app/shared/CustomNumber.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/CustomNumber.ts ***!
    \****************************************/

  /*! exports provided: CustomNumber */

  /***/
  function srcAppSharedCustomNumberTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomNumber", function () {
      return CustomNumber;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Number in base BASE with addition, subtraction and a few other functionalities
     */


    var CustomNumber = /*#__PURE__*/function () {
      function CustomNumber(list) {
        _classCallCheck(this, CustomNumber);

        this.arr = Object.assign([], CustomNumber.trimLeadingZeros(list)); // Deep copy
      }
      /**
       * Normal subtract function in base BASE with the assumption that n1 >= n2
       */


      _createClass(CustomNumber, [{
        key: "compareTo",
        value:
        /**
         * Normal compare in base BASE
         */
        function compareTo(other) {
          if (this.arr.length !== other.arr.length) {
            return this.arr.length - other.arr.length;
          }

          for (var i = 0; i < this.arr.length; i++) {
            if (this.arr[i] !== other.arr[i]) {
              return this.arr[i] - other.arr[i];
            }
          }

          return 0; // Equal
        }
      }, {
        key: "toString",
        value: function toString() {
          var description = '';
          var currentBase = CustomNumber.BASE;

          if (currentBase === 10) {
            for (var i = 0; i < this.arr.length; i++) {
              description = description + this.arr[i];
            }
          } else {
            for (var _i4 = 0; _i4 < this.arr.length; _i4++) {
              description = description + '(' + this.arr[_i4] + ')';
            }
          }

          return description;
        }
      }], [{
        key: "subtractGreaterThan",
        value: function subtractGreaterThan(n1, n2) {
          if (n1.compareTo(n2) < 0) {
            throw new Error('n1 < n2 in when substracting greater than');
          }

          var carry = 0;
          var resArr = new Array(n1.arr.length);
          var index1 = n1.arr.length - 1;
          var index2 = n2.arr.length - 1;

          if (index2 > index1) {
            throw new Error('n1 cannot not be smaller than n2');
          }

          while (index2 >= 0) {
            var curDigit = n1.arr[index1] - n2.arr[index2] - carry;
            carry = 0;

            if (curDigit < 0) {
              carry = 1;
              curDigit += this.BASE;
            }

            resArr[index1] = curDigit;
            index1--;
            index2--;
          }

          while (index1 >= 0) {
            var _curDigit = n1.arr[index1] - carry;

            carry = 0;

            if (_curDigit < 0) {
              carry = 1;
              _curDigit += this.BASE;
            }

            resArr[index1] = _curDigit;
            index1--;
          }

          resArr = CustomNumber.trimLeadingZeros(resArr);
          return new CustomNumber(resArr);
        }
        /**
         * Normal add function in base BASE
         */

      }, {
        key: "add",
        value: function add(n1, n2) {
          var length1 = n1.arr.length;
          var length2 = n2.arr.length;
          var biggerLength = Math.max(length1, length2);
          var resArr = new Array(biggerLength + 1);
          var carry = 0;
          var index1 = length1 - 1;
          var index2 = length2 - 1;
          var resIndex = resArr.length - 1;

          while (index1 >= 0 && index2 >= 0) {
            var sum = n1.arr[index1] + n2.arr[index2] + carry;
            carry = Math.floor(sum / this.BASE);
            var realDigit = sum % this.BASE;
            resArr[resIndex] = realDigit;
            index1--;
            index2--;
            resIndex--;
          } // At most 1 while loop will be executed


          while (index1 >= 0) {
            var _sum = n1.arr[index1] + carry;

            carry = Math.floor(_sum / this.BASE);

            var _realDigit = _sum % this.BASE;

            resArr[resIndex] = _realDigit;
            index1--;
            resIndex--;
          }

          while (index2 >= 0) {
            var _sum2 = n2.arr[index2] + carry;

            carry = Math.floor(_sum2 / this.BASE);

            var _realDigit2 = _sum2 % this.BASE;

            resArr[resIndex] = _realDigit2;
            index2--;
            resIndex--;
          }

          resArr[0] = carry;
          resArr = CustomNumber.trimLeadingZeros(resArr);
          return new CustomNumber(resArr);
        }
        /**
         * Convert to base 10, do integer division and then convert back
         */

      }, {
        key: "naiveFloorDivide",
        value: function naiveFloorDivide(n1, n2) {
          var decimal1 = CustomNumber.customNumberToDecimal(n1);
          var decimal2 = CustomNumber.customNumberToDecimal(n2);
          var quotientDecimal = Math.floor(decimal1 / decimal2);
          return CustomNumber.decimalToCustomNumber(quotientDecimal);
        }
      }, {
        key: "customNumberToDecimal",
        value: function customNumberToDecimal(n) {
          var num = 0;
          var pos = 0;

          for (var index = n.arr.length - 1; index >= 0; index--) {
            num += n.arr[index] * Math.pow(CustomNumber.BASE, pos);
            pos++;
          }

          if (!Number.isSafeInteger(num)) {
            throw new Error('Error: Number is not safe. Potential precision lost. Check if CustomNumber.BASE is too large');
          }

          return num;
        }
      }, {
        key: "decimalToCustomNumber",
        value: function decimalToCustomNumber(n) {
          var arr = new Array();

          while (n > 0) {
            arr.push(n % CustomNumber.BASE);
            n = Math.floor(n / CustomNumber.BASE);
          }

          return new CustomNumber(arr.reverse());
        }
        /**
         * Return a CustomNumber object from an IdentifierArray by taking digits only
         */

      }, {
        key: "customNumberFromIdentifierArray",
        value: function customNumberFromIdentifierArray(identifiers) {
          var digitArr = identifiers.map(function (id) {
            return id.digit;
          });
          return new CustomNumber(digitArr);
        }
        /**
         * Decrease some digits to generate a number less than n
         */

      }, {
        key: "generateLessThan",
        value: function generateLessThan(n) {
          // Optimization: If n is bigger than 100: just return something from 1 to 100 inclusive
          if (n.compareTo(new CustomNumber([100])) > 0) {
            var randomDigit = Math.floor(Math.random() * 100) + 1;
            return new CustomNumber([randomDigit]);
          } // If only 1 digit


          if (n.arr.length === 1) {
            var newDigit = Math.floor(Math.random() * (n.arr[0] - 1)) + 1; // newDigit = 1->oldDigit-1. Never 0

            return new CustomNumber([newDigit]);
          } // 2 digits or longer


          var newArr = Object.assign([], n.arr);
          var numDigitsNonZero = newArr.filter(function (x) {
            return x !== 0;
          }).length;

          if (numDigitsNonZero === 1) {
            // Such an unusual case (Ex: 1000000)
            // Decrease that number by 1 to get more nonZeroDigits
            var newNumber = CustomNumber.subtractGreaterThan(n, new CustomNumber([1]));
            newArr = Object.assign([], newNumber.arr);
          } // Decrease 1->numDigitsNonZero-1 times, prioritize more significant digits


          var toBeDecreased = Math.floor(Math.random() * (numDigitsNonZero - 1)) + 1;

          for (var i = 0; i < newArr.length; i++) {
            if (newArr[i] !== 0) {
              newArr[i] = Math.floor(Math.random() * newArr[i]);
            }
          } // Always return something > 0


          var result = new CustomNumber(CustomNumber.trimLeadingZeros(newArr));

          if (result.compareTo(new CustomNumber([0])) === 0) {
            // If result is 0
            return new CustomNumber([1]); // fine! return 1
          }

          return result; // If result is not 0, return result
        }
        /**
         * Trim leading zeros, but left 1 zero if the remaining array is [0]
         */

      }, {
        key: "trimLeadingZeros",
        value: function trimLeadingZeros(arr) {
          var firstNonZeroIndex = arr.findIndex(function (x) {
            return x !== 0;
          });

          if (firstNonZeroIndex === -1) {
            // If the whole array is 0
            return [0];
          }

          return arr.slice(firstNonZeroIndex, arr.length);
        }
      }]);

      return CustomNumber;
    }(); // Don't use BASE too large (less than 2^50).
    // Reason: Number.MAX_SAFE_INTEGER == 2^53 - 1. This class will have some adding. We don't want number to exceed MAX_SAFE_INTEGER
    // Also: Don't use BASE too small (has to be bigger than 100)
    // Reason: In function generateLessThan, we hard-coded the value 100


    CustomNumber.BASE = Math.pow(2, 25);
    /***/
  },

  /***/
  "./src/app/shared/Languages.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/Languages.ts ***!
    \*************************************/

  /*! exports provided: Languages */

  /***/
  function srcAppSharedLanguagesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Languages", function () {
      return Languages;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Languages = [{
      name: 'ABAP',
      value: 'abap',
      ext: ''
    }, {
      name: 'AES',
      value: 'aes',
      ext: ''
    }, {
      name: 'Apex',
      value: 'apex',
      ext: ''
    }, {
      name: 'Azure CLI',
      value: 'azcli',
      ext: ''
    }, {
      name: 'Bat',
      value: 'bat',
      ext: '.bat'
    }, {
      name: 'C',
      value: 'c',
      ext: '.c'
    }, {
      name: 'Clojure',
      value: 'clojure',
      ext: '.clj'
    }, {
      name: 'CoffeeScript',
      value: 'coffeescript',
      ext: '.litcoffee'
    }, {
      name: 'C++',
      value: 'cpp',
      ext: '.cpp'
    }, {
      name: 'C#',
      value: 'csharp',
      ext: '.cs'
    }, {
      name: 'CSP',
      value: 'csp',
      ext: ''
    }, {
      name: 'CSS',
      value: 'css',
      ext: '.css'
    }, {
      name: 'Docker',
      value: 'dockerfile',
      ext: ''
    }, {
      name: 'F#',
      value: 'fsharp',
      ext: '.fs'
    }, {
      name: 'Go',
      value: 'go',
      ext: '.go'
    }, {
      name: 'GraphQL',
      value: 'graphql',
      ext: '.graphql'
    }, {
      name: 'Handlebars',
      value: 'handlebars',
      ext: ''
    }, {
      name: 'HTML',
      value: 'html',
      ext: '.html'
    }, {
      name: 'ini',
      value: 'ini',
      ext: '.ini'
    }, {
      name: 'Java',
      value: 'java',
      ext: '.java'
    }, {
      name: 'JavaScript',
      value: 'javascript',
      ext: '.js'
    }, {
      name: 'JSON',
      value: 'json',
      ext: '.json'
    }, {
      name: 'Kotlin',
      value: 'kotlin',
      ext: '.kts'
    }, {
      name: 'LESS',
      value: 'less',
      ext: '.less'
    }, {
      name: 'Lua',
      value: 'lua',
      ext: '.lua'
    }, {
      name: 'Markdown',
      value: 'markdown',
      ext: '.md'
    }, {
      name: 'MIPS',
      value: 'mips',
      ext: ''
    }, {
      name: 'Microsoft DAX',
      value: 'msdax',
      ext: ''
    }, {
      name: 'MySQL',
      value: 'mysql',
      ext: '.sql'
    }, {
      name: 'Objective-C',
      value: 'objective-c',
      ext: '.mm'
    }, {
      name: 'Pascal',
      value: 'pascal',
      ext: '.pas'
    }, {
      name: 'Perl',
      value: 'perl',
      ext: '.pl'
    }, {
      name: 'PostgreSQL',
      value: 'pgsql',
      ext: '.sql'
    }, {
      name: 'PHP',
      value: 'php',
      ext: '.php'
    }, {
      name: 'Plain Text',
      value: 'plaintext',
      ext: '.txt'
    }, {
      name: 'Power Query',
      value: 'powerquery',
      ext: ''
    }, {
      name: 'Power Shell',
      value: 'powershell',
      ext: '.ps1'
    }, {
      name: 'Pug',
      value: 'pug',
      ext: ''
    }, {
      name: 'Python',
      value: 'python',
      ext: '.py'
    }, {
      name: 'R',
      value: 'r',
      ext: '.R'
    }, {
      name: 'Razor',
      value: 'razor',
      ext: ''
    }, {
      name: 'Redis',
      value: 'redis',
      ext: ''
    }, {
      name: 'Redshift',
      value: 'redshift',
      ext: ''
    }, {
      name: 'reStructuredText',
      value: 'restructuredtext',
      ext: ''
    }, {
      name: 'Ruby',
      value: 'ruby',
      ext: '.rb'
    }, {
      name: 'Rust',
      value: 'rust',
      ext: '.rs'
    }, {
      name: 'Small Basic',
      value: 'sb',
      ext: ''
    }, {
      name: 'Scheme',
      value: 'scheme',
      ext: '.scm'
    }, {
      name: 'SCSS',
      value: 'scss',
      ext: ''
    }, {
      name: 'Shell',
      value: 'shell',
      ext: ''
    }, {
      name: 'SOL',
      value: 'sol',
      ext: ''
    }, {
      name: 'SQL',
      value: 'sql',
      ext: '.sql'
    }, {
      name: 'Structured Text',
      value: 'st',
      ext: ''
    }, {
      name: 'Swift',
      value: 'swift',
      ext: '.swift'
    }, {
      name: 'Tcl',
      value: 'tcl',
      ext: '.tcl'
    }, {
      name: 'Twig',
      value: 'twig',
      ext: '.twig'
    }, {
      name: 'Typescript',
      value: 'typescript',
      ext: '.ts'
    }, {
      name: 'Visual Basic',
      value: 'vb',
      ext: '.vb'
    }, {
      name: 'XML',
      value: 'xml',
      ext: '.xml'
    }, {
      name: 'YAML',
      value: 'yaml',
      ext: '.yml'
    }];
    /***/
  },

  /***/
  "./src/app/shared/Message.ts":
  /*!***********************************!*\
    !*** ./src/app/shared/Message.ts ***!
    \***********************************/

  /*! exports provided: Message */

  /***/
  function srcAppSharedMessageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Message", function () {
      return Message;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Message = /*#__PURE__*/_createClass(function Message(content, messageType, fromPeerId, chatMessageTime) {
      _classCallCheck(this, Message);

      this.content = content;
      this.messageType = messageType;
      this.fromPeerId = fromPeerId;
      this.chatMessageTime = chatMessageTime;
    });
    /***/

  },

  /***/
  "./src/app/shared/NameColor.ts":
  /*!*************************************!*\
    !*** ./src/app/shared/NameColor.ts ***!
    \*************************************/

  /*! exports provided: NameColor */

  /***/
  function srcAppSharedNameColorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NameColor", function () {
      return NameColor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var NameColor = /*#__PURE__*/_createClass(function NameColor(name, color, ofPeerId) {
      _classCallCheck(this, NameColor);

      this.name = name;
      this.color = color;
      this.ofPeerId = ofPeerId;
    });
    /***/

  },

  /***/
  "./src/app/shared/SelectionChangeInfo.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/SelectionChangeInfo.ts ***!
    \***********************************************/

  /*! exports provided: SelectionChangeInfo */

  /***/
  function srcAppSharedSelectionChangeInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectionChangeInfo", function () {
      return SelectionChangeInfo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var SelectionChangeInfo = /*#__PURE__*/_createClass(function SelectionChangeInfo(startLine, startCol, endLine, endCol, peerId, source, reason) {
      _classCallCheck(this, SelectionChangeInfo);

      this.startLine = startLine;
      this.startColumn = startCol;
      this.endLine = endLine;
      this.endColumn = endCol;
      this.peerId = peerId;
      this.source = source;
      this.reason = reason;
    });
    /***/

  },

  /***/
  "./src/app/shared/Utils.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/Utils.ts ***!
    \*********************************/

  /*! exports provided: CrdtUtils, PeerUtils, Utils */

  /***/
  function srcAppSharedUtilsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrdtUtils", function () {
      return CrdtUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PeerUtils", function () {
      return PeerUtils;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Utils", function () {
      return Utils;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _CRDT__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./CRDT */
    "./src/app/shared/CRDT.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var alertifyjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! alertifyjs */
    "./node_modules/alertifyjs/build/alertify.js");
    /* harmony import */


    var alertifyjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(alertifyjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _AlertType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./AlertType */
    "./src/app/shared/AlertType.ts");
    /* harmony import */


    var _Languages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Languages */
    "./src/app/shared/Languages.ts");

    var CrdtUtils = /*#__PURE__*/function () {
      function CrdtUtils() {
        _classCallCheck(this, CrdtUtils);
      }

      _createClass(CrdtUtils, null, [{
        key: "crdtArrToString",
        value: function crdtArrToString(crdts, seperator) {
          var crdtStrings = crdts.map(function (crdt) {
            return crdt.toString();
          });
          return crdtStrings.join(seperator);
        }
      }, {
        key: "stringToCRDTArr",
        value: function stringToCRDTArr(str, delimiter) {
          var crdtStrings = str.split(delimiter);
          var crdts = crdtStrings.map(function (crdtStr) {
            return _CRDT__WEBPACK_IMPORTED_MODULE_1__["CRDT"].parse(crdtStr);
          });
          return crdts;
        }
        /**
         * Break huge crdts array into smaller arrays to avoid connection crash when sending
         */

      }, {
        key: "breakCrdtsIntoCrdtStringBatches",
        value: function breakCrdtsIntoCrdtStringBatches(crdts, delimiter) {
          var crdtStrings = crdts.map(function (crdt) {
            return crdt.toString();
          });
          var crdtStringsBatches = [];
          var startIndex = 0;
          var i;
          var curLength = 0;

          for (i = 0; i < crdtStrings.length; i++) {
            if (curLength + crdtStrings[i].length >= this.MAX_STRING_LENGTH_PER_SEND) {
              crdtStringsBatches.push(crdtStrings.slice(startIndex, i).join(delimiter));
              startIndex = i;
              curLength = 0;
              i--;
            } else {
              curLength += crdtStrings[i].length + 2; // +2 for delimiter
            }
          }

          crdtStringsBatches.push(crdtStrings.slice(startIndex, i).join(delimiter));
          return crdtStringsBatches;
        }
      }]);

      return CrdtUtils;
    }();

    CrdtUtils.MAX_STRING_LENGTH_PER_SEND = 64000; // 64Kb => 65536 bytes => 65536 chars. Leave some chars for JSON

    var PeerUtils = /*#__PURE__*/function () {
      function PeerUtils() {
        _classCallCheck(this, PeerUtils);
      }

      _createClass(PeerUtils, null, [{
        key: "connectionHasOpened",
        value: function connectionHasOpened(con, connections) {
          return connections.findIndex(function (x) {
            return x.peer === con.peer;
          }) !== -1;
        }
      }, {
        key: "announceInfo",
        value: function announceInfo(announceType) {
          PeerUtils.announce.emit(announceType);
        }
      }, {
        key: "addUniqueMessages",
        value: function addUniqueMessages(list, listToBeAddedTo) {
          list.forEach(function (message) {
            var weHadThatMessage = false;

            for (var i = 0; i < listToBeAddedTo.length; i++) {
              if (listToBeAddedTo[i].fromPeerId === message.fromPeerId && listToBeAddedTo[i].chatMessageTime === message.chatMessageTime) {
                weHadThatMessage = true;
                break;
              }
            }

            if (!weHadThatMessage) {
              listToBeAddedTo.push(message);
            }
          });
        }
      }, {
        key: "handlePeerError",
        value: function handlePeerError(message) {
          var ans = confirm(message);
          if (ans === true) window.location.replace('/');else PeerUtils.announceInfo(15
          /* UnhandledError */
          ); // TODO: WARN USER THAT THIS HAS STOP SYNC
        }
      }]);

      return PeerUtils;
    }();

    PeerUtils.announce = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

    var Utils = /*#__PURE__*/function () {
      function Utils() {
        _classCallCheck(this, Utils);
      }

      _createClass(Utils, [{
        key: "confirm",
        value: function confirm(message, okCallback) {
          alertifyjs__WEBPACK_IMPORTED_MODULE_3__["confirm"](message, function (e) {
            if (e) okCallback();
          });
        }
      }], [{
        key: "addUniqueConnections",
        value: function addUniqueConnections(list, listToBeAddedTo) {
          list.forEach(function (obj) {
            var hasExist = false;

            for (var i = 0; i < listToBeAddedTo.length; i++) {
              if (obj.peer === listToBeAddedTo[i].peer) {
                hasExist = true;
                break;
              }
            }

            if (!hasExist) {
              listToBeAddedTo.push(obj);
            }
          });
        }
      }, {
        key: "addUniqueNameColor",
        value: function addUniqueNameColor(nameColor, listToBeAddedTo) {
          if (!listToBeAddedTo.find(function (x) {
            return x.name === nameColor.name && x.color === nameColor.color;
          })) {
            listToBeAddedTo.push(nameColor);
          }
        }
      }, {
        key: "broadcastInfo",
        value: function broadcastInfo(announceType) {
          Utils.broadcast.emit(announceType);
        }
      }, {
        key: "alert",
        value: function alert(message, alertType) {
          if (alertType === _AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Success) alertifyjs__WEBPACK_IMPORTED_MODULE_3__["success"](message);else if (alertType === _AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Warning) alertifyjs__WEBPACK_IMPORTED_MODULE_3__["warning"](message);else if (alertType === _AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Error) alertifyjs__WEBPACK_IMPORTED_MODULE_3__["error"](message);else if (alertType === _AlertType__WEBPACK_IMPORTED_MODULE_4__["AlertType"].Message) alertifyjs__WEBPACK_IMPORTED_MODULE_3__["message"](message);
        }
      }, {
        key: "inArray",
        value: function inArray(item, array) {
          return array.findIndex(function (elem) {
            return elem === item;
          }) !== -1;
        }
      }, {
        key: "getLanguageName",
        value: function getLanguageName(lang) {
          return _Languages__WEBPACK_IMPORTED_MODULE_5__["Languages"].find(function (elem) {
            return elem.value === lang;
          }).name;
        }
      }, {
        key: "getLanguageExt",
        value: function getLanguageExt(lang) {
          return _Languages__WEBPACK_IMPORTED_MODULE_5__["Languages"].find(function (elem) {
            return elem.value === lang;
          }).ext;
        }
      }]);

      return Utils;
    }();

    Utils.broadcast = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      // apiUrl: 'http://localhost:5000/api/',
      apiUrl: 'https://code-spot.vercel.app/api/',
      peerServerHost: 'code-spot-peer-server.herokuapp.com/',
      connection: 'https://code-spot.vercel.app'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\coding\coding-projects\Code-Spot-P2P-Nodejs\code-spot-client\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map