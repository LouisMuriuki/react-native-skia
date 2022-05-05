#pragma once

#include <memory>
#include <utility>

#include <jsi/jsi.h>

#include <JsiSkHostObjects.h>

#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdocumentation"

#include "modules/sksg/include/SkSGRect.h"
#include <values/RNSkReadonlyValue.h>

#pragma clang diagnostic pop

namespace RNSkia {

    using namespace facebook;

    class JsiSkSGRect: public JsiSkWrappingSkPtrHostObject<sksg::Rect> {
    public:

        JsiSkSGRect(std::shared_ptr<RNSkPlatformContext> context, sk_sp<sksg::Rect> node)
                : JsiSkWrappingSkPtrHostObject<sksg::Rect>(
                context, std::move(node)) {};

        JSI_PROPERTY_GET(__typename__) {
                return jsi::String::createFromUtf8(runtime, "Rect");
        }

        JSI_EXPORT_PROPERTY_GETTERS(JSI_EXPORT_PROP_GET(JsiSkSGRect, __typename__))

        static sk_sp<sksg::Draw> fromValue(jsi::Runtime &runtime,
                                           const jsi::Value &obj) {
            return obj.asObject(runtime)
                    .asHostObject<JsiSkSGDraw>(runtime)
                    ->getObject();
        }
    };

} // namespace RNSkia