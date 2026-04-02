import DebugSwift
import Foundation

@objcMembers
open class DebugTools: NSObject {
    static let shared = DebugSwift()
    @objc public static func show() {
        DispatchQueue.main.async {
            shared.setup()
            shared.show()
        }
    }

    @objc public static func toggle() {
        DispatchQueue.main.async {
            shared.toggle()
        }
    }
}