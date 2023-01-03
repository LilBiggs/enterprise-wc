import IdsAttachmentMixin from '../../mixins/ids-attachment-mixin/ids-attachment-mixin';
import IdsEventsMixin from '../../mixins/ids-events-mixin/ids-events-mixin';
import IdsPopupOpenEventsMixin from '../../mixins/ids-popup-open-events-mixin/ids-popup-open-events-mixin';
import IdsPopupInteractionsMixin from '../../mixins/ids-popup-interactions-mixin/ids-popup-interactions-mixin';
import IdsElement from '../../core/ids-element';

const Base = IdsPopupOpenEventsMixin(
  IdsPopupInteractionsMixin(
    IdsEventsMixin(
      IdsAttachmentMixin(
        IdsElement
      )
    )
  )
);

export default Base;